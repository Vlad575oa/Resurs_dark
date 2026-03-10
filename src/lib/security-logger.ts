/**
 * Security Event Logger
 * Logs security-related events for audit and monitoring purposes
 */

import fs from 'fs';
import path from 'path';

export type SecurityEventType =
  | 'FAILED_LOGIN'
  | 'SUCCESSFUL_LOGIN'
  | 'LOGOUT'
  | 'RATE_LIMIT_EXCEEDED'
  | 'CSRF_FAILURE'
  | 'FILE_UPLOAD'
  | 'FILE_UPLOAD_FAILED'
  | 'CONTENT_MODIFIED'
  | 'CONTENT_DELETED'
  | 'UNAUTHORIZED_ACCESS'
  | 'SUSPICIOUS_ACTIVITY';

export type SecuritySeverity = 'low' | 'medium' | 'high' | 'critical';

export interface SecurityLogEvent {
  type: SecurityEventType;
  severity: SecuritySeverity;
  ip?: string;
  user?: string;
  details?: string;
  timestamp: string;
  userAgent?: string;
}

const LOG_FILE = path.join(process.cwd(), 'logs', 'security.log');

/**
 * Ensure log directory exists
 */
function ensureLogDir(): void {
  const logDir = path.dirname(LOG_FILE);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
}

/**
 * Log a security event
 */
export function logSecurityEvent(event: Omit<SecurityLogEvent, 'timestamp'>): void {
  try {
    // Only attempt filesystem operations in Node.js environment
    if (typeof window !== 'undefined') return;

    ensureLogDir();
    
    const logEntry: SecurityLogEvent = {
      ...event,
      timestamp: new Date().toISOString(),
    };
    
    // Append to log file
    const logLine = JSON.stringify(logEntry) + '\n';
    fs.appendFileSync(LOG_FILE, logLine);
    
    // Alert on critical/high severity events in development
    if (event.severity === 'critical' || event.severity === 'high') {
      console.error('[SECURITY ALERT]', JSON.stringify(logEntry));
    }
  } catch (err) {
    // Fallback to console if file logging fails, but don't crash
    console.error('[SECURITY ERROR] Failed to write log:', err);
    console.warn('[SECURITY EVENT]', JSON.stringify(event));
  }
}

/**
 * Get severity from event type
 */
export function getEventSeverity(type: SecurityEventType): SecuritySeverity {
  const severityMap: Record<SecurityEventType, SecuritySeverity> = {
    FAILED_LOGIN: 'medium',
    SUCCESSFUL_LOGIN: 'low',
    LOGOUT: 'low',
    RATE_LIMIT_EXCEEDED: 'medium',
    CSRF_FAILURE: 'high',
    FILE_UPLOAD: 'low',
    FILE_UPLOAD_FAILED: 'medium',
    CONTENT_MODIFIED: 'medium',
    CONTENT_DELETED: 'high',
    UNAUTHORIZED_ACCESS: 'high',
    SUSPICIOUS_ACTIVITY: 'critical',
  };
  
  return severityMap[type];
}
