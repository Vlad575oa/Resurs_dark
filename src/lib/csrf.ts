/**
 * CSRF Protection Utilities
 */

import { randomBytes, createHash } from 'crypto';

/**
 * Generate a secure CSRF token
 */
export function generateCsrfToken(): string {
  return randomBytes(32).toString('hex');
}

/**
 * Validate CSRF token
 * Uses constant-time comparison to prevent timing attacks
 */
export function validateCsrfToken(token: string, expectedToken: string): boolean {
  if (!token || !expectedToken) {
    return false;
  }

  const tokenBuffer = Buffer.from(token);
  const expectedBuffer = Buffer.from(expectedToken);

  if (tokenBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(tokenBuffer, expectedBuffer);
}

/**
 * Hash a CSRF token for secure storage
 */
export function hashCsrfToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}
