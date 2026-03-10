/**
 * CSRF Protection Utilities
 */

/**
 * Generate a secure CSRF token using Web Crypto API
 * Compatible with Edge runtime
 */
export function generateCsrfToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Validate CSRF token
 * Uses constant-time comparison to prevent timing attacks
 */
export function validateCsrfToken(token: string, expectedToken: string): boolean {
  if (!token || !expectedToken) {
    return false;
  }

  const encoder = new TextEncoder();
  const tokenBytes = encoder.encode(token);
  const expectedBytes = encoder.encode(expectedToken);

  if (tokenBytes.length !== expectedBytes.length) {
    return false;
  }

  // Constant-time comparison for Edge runtime
  let result = 0;
  for (let i = 0; i < tokenBytes.length; i++) {
    result |= tokenBytes[i] ^ expectedBytes[i];
  }
  return result === 0;
}

/**
 * Hash a CSRF token for secure storage using Web Crypto API
 */
export async function hashCsrfToken(token: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(token);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}
