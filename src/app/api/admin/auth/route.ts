import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { randomBytes } from 'crypto';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import crypto from 'node:crypto';
import { logSecurityEvent, getEventSeverity } from '@/lib/security-logger';

// Initialize rate limiter (5 attempts per minute per IP)
// Only initialize if environment variables are present to avoid crashing in local dev
let ratelimit: Ratelimit | null = null;
try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, '1 m'),
      analytics: true,
    });
  }
} catch (e) {
  console.warn('[SECURITY] Failed to initialize rate limiter:', e);
}

// Require ADMIN_PASSWORD environment variable - no fallback
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!ADMIN_PASSWORD) {
  console.warn('[SECURITY] ADMIN_PASSWORD environment variable is not set!');
}

export async function POST(req: NextRequest) {
  // Safe way to get IP in Next.js 15+ App Router
  const forwardedFor = req.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0] : '127.0.0.1';
  
  // Rate limiting check (optional in local development)
  if (ratelimit) {
    const { success, limit, reset, remaining } = await ratelimit.limit(ip);
    
    if (!success) {
      logSecurityEvent({
        type: 'RATE_LIMIT_EXCEEDED',
        severity: getEventSeverity('RATE_LIMIT_EXCEEDED'),
        ip,
        details: `Rate limit exceeded. Limit: ${limit}, Reset: ${reset}, Remaining: ${remaining}`,
      });
      
      return NextResponse.json(
        { error: 'Too many attempts. Please try again later.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
          }
        }
      );
    }
  }

  // Validate ADMIN_PASSWORD is set
  if (!ADMIN_PASSWORD) {
    logSecurityEvent({
      type: 'SUSPICIOUS_ACTIVITY',
      severity: 'critical',
      ip,
      details: 'Login attempt when ADMIN_PASSWORD is not configured',
    });
    
    return NextResponse.json(
      { error: 'Server configuration error. Contact administrator.' },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { password } = body;

    // Validate password format (basic check)
    if (!password || typeof password !== 'string') {
      logSecurityEvent({
        type: 'FAILED_LOGIN',
        severity: getEventSeverity('FAILED_LOGIN'),
        ip,
        details: 'Invalid password format provided',
      });
      
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Constant-time comparison to prevent timing attacks
    const passwordBuffer = Buffer.from(password);
    const expectedBuffer = Buffer.from(ADMIN_PASSWORD);
    
    if (passwordBuffer.length !== expectedBuffer.length || 
        !crypto.timingSafeEqual(passwordBuffer, expectedBuffer)) {
      logSecurityEvent({
        type: 'FAILED_LOGIN',
        severity: getEventSeverity('FAILED_LOGIN'),
        ip,
        details: 'Invalid password provided',
      });
      
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate secure random token (32 bytes = 64 hex chars)
    const authToken = randomBytes(32).toString('hex');
    
    const cookieStore = await cookies();
    cookieStore.set('auth-token', authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 2, // 2 hours
      path: '/',
    });

    logSecurityEvent({
      type: 'SUCCESSFUL_LOGIN',
      severity: getEventSeverity('SUCCESSFUL_LOGIN'),
      ip,
      user: 'admin',
      details: 'Successful admin authentication',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    logSecurityEvent({
      type: 'SUSPICIOUS_ACTIVITY',
      severity: 'high',
      ip,
      details: `Login attempt error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    });
    
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('auth-token');
  
  logSecurityEvent({
    type: 'LOGOUT',
    severity: getEventSeverity('LOGOUT'),
    user: 'admin',
    details: 'Admin logout',
  });
  
  return NextResponse.json({ success: true });
}
