import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { logSecurityEvent, getEventSeverity } from '@/lib/security-logger';

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

// Security constraints
const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml',
  'video/mp4',
  'application/pdf',
];

const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.mp4', '.pdf'];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB per file
const MAX_TOTAL_SIZE = 50 * 1024 * 1024; // 50MB total per request

/**
 * Validate file security
 */
function validateFile(file: File): { valid: boolean; error?: string } {
  // Validate MIME type
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    return { valid: false, error: `Invalid file type: ${file.type}` };
  }

  // Validate file size
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: `File too large: ${(file.size / 1024 / 1024).toFixed(2)}MB (max 10MB)` };
  }

  // Validate file extension
  const ext = path.extname(file.name).toLowerCase();
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return { valid: false, error: `Invalid file extension: ${ext}` };
  }

  // Check for double extension attacks (e.g., file.pdf.exe)
  const nameParts = file.name.toLowerCase().split('.');
  if (nameParts.length > 2) {
    return { valid: false, error: 'Multiple file extensions not allowed' };
  }

  return { valid: true };
}

/**
 * Sanitize filename to prevent directory traversal and other attacks
 */
function sanitizeFilename(filename: string): string {
  // Remove any path components
  let sanitized = path.basename(filename);

  // Remove special characters that could be problematic
  sanitized = sanitized.replace(/[^a-zA-Z0-9._-]/g, '_');

  // Ensure it doesn't start with a dot
  if (sanitized.startsWith('.')) {
    sanitized = '_' + sanitized;
  }

  return sanitized;
}

export async function POST(req: NextRequest) {
  // Safe way to get IP in Next.js 15+ App Router
  const forwardedFor = req.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0] : '127.0.0.1';

  try {
    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }

    const formData = await req.formData();
    const files = formData.getAll('files') as File[];

    if (!files.length) {
      logSecurityEvent({
        type: 'FILE_UPLOAD_FAILED',
        severity: getEventSeverity('FILE_UPLOAD_FAILED'),
        ip,
        details: 'No files provided in upload request',
      });

      return NextResponse.json({ error: 'No files provided' }, { status: 400 });
    }

    // Validate total size
    const totalSize = files.reduce((acc, file) => acc + file.size, 0);
    if (totalSize > MAX_TOTAL_SIZE) {
      logSecurityEvent({
        type: 'FILE_UPLOAD_FAILED',
        severity: getEventSeverity('FILE_UPLOAD_FAILED'),
        ip,
        details: `Total upload size exceeded: ${(totalSize / 1024 / 1024).toFixed(2)}MB (max 50MB)`,
      });

      return NextResponse.json({ error: 'Total upload size exceeds limit (50MB)' }, { status: 400 });
    }

    const uploaded: string[] = [];
    const errors: string[] = [];

    for (const file of files) {
      // Validate file
      const validation = validateFile(file);
      if (!validation.valid) {
        logSecurityEvent({
          type: 'FILE_UPLOAD_FAILED',
          severity: getEventSeverity('FILE_UPLOAD_FAILED'),
          ip,
          details: `File validation failed: ${file.name} - ${validation.error}`,
        });

        errors.push(`${file.name}: ${validation.error}`);
        continue;
      }

      // Sanitize filename and generate unique name
      const originalName = sanitizeFilename(file.name);
      const ext = path.extname(originalName);
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 15);
      const name = `${timestamp}-${random}${ext}`;
      const dest = path.join(UPLOADS_DIR, name);

      // Write file
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      fs.writeFileSync(dest, buffer);

      uploaded.push(`/uploads/${name}`);
    }

    logSecurityEvent({
      type: 'FILE_UPLOAD',
      severity: getEventSeverity('FILE_UPLOAD'),
      ip,
      details: `Successfully uploaded ${uploaded.length} file(s). Total: ${(totalSize / 1024 / 1024).toFixed(2)}MB`,
    });

    if (errors.length > 0 && uploaded.length === 0) {
      return NextResponse.json({ error: 'All files failed validation', details: errors }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      uploaded,
      warnings: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    logSecurityEvent({
      type: 'FILE_UPLOAD_FAILED',
      severity: getEventSeverity('FILE_UPLOAD_FAILED'),
      ip,
      details: `Upload error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    });

    return NextResponse.json({
      error: 'Upload failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
