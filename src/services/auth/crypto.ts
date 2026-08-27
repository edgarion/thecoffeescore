/**
 * Zero-dependency Web Crypto based password hashing and verification
 * Compatible with Node.js 18+, Vercel Serverless, Edge runtime, and Browsers.
 */

const ITERATIONS = 100000;
const KEY_LEN = 32;

/**
 * Generates a cryptographically secure random salt in hex
 */
export function generateSalt(length: number = 16): string {
  const array = new Uint8Array(length);
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(array);
  } else {
    for (let i = 0; i < length; i++) array[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Hashes a plain-text password using PBKDF2 with SHA-256
 */
export async function hashPassword(password: string, customSalt?: string): Promise<string> {
  const salt = customSalt || generateSalt();
  const encoder = new TextEncoder();
  const passwordKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: encoder.encode(salt),
      iterations: ITERATIONS,
      hash: 'SHA-256',
    },
    passwordKey,
    KEY_LEN * 8
  );

  const hashHex = Array.from(new Uint8Array(derivedBits), b => b.toString(16).padStart(2, '0')).join('');
  return `${salt}:${ITERATIONS}:${hashHex}`;
}

/**
 * Verifies a password against a stored PBKDF2 hash string
 */
export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  try {
    const parts = storedHash.split(':');
    if (parts.length !== 3) return false;
    const [salt, iterationsStr, originalHash] = parts;
    const iterations = parseInt(iterationsStr, 10);
    if (!salt || isNaN(iterations) || !originalHash) return false;

    const encoder = new TextEncoder();
    const passwordKey = await crypto.subtle.importKey(
      'raw',
      encoder.encode(password),
      { name: 'PBKDF2' },
      false,
      ['deriveBits']
    );

    const derivedBits = await crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: encoder.encode(salt),
        iterations,
        hash: 'SHA-256',
      },
      passwordKey,
      KEY_LEN * 8
    );

    const hashHex = Array.from(new Uint8Array(derivedBits), b => b.toString(16).padStart(2, '0')).join('');
    return hashHex === originalHash;
  } catch (err) {
    console.error('Password verification error:', err);
    return false;
  }
}

/**
 * Generates an opaque random session token
 */
export function generateSessionToken(): string {
  return `tcs_${Date.now()}_${generateSalt(24)}`;
}
