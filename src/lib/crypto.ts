import crypto from 'crypto';

/**
 * Seals plaintext into a base64 string combining nonce, ciphertext, and auth tag.
 * Compatible with Rust's chacha20poly1305 crate.
 */
export function sealPayload(plaintext: string, base64Key: string): string {
  const key = Buffer.from(base64Key, 'base64');
  if (key.length !== 32) {
    throw new Error('Key must be 32 bytes');
  }

  const nonce = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('chacha20-poly1305', key, nonce, {
    authTagLength: 16
  });

  const ciphertext = Buffer.concat([
    cipher.update(plaintext, 'utf8'),
    cipher.final()
  ]);
  const authTag = cipher.getAuthTag();

  // Rust's chacha20poly1305 concatenates nonce + ciphertext + authTag
  const combined = Buffer.concat([nonce, ciphertext, authTag]);
  return combined.toString('base64');
}

/**
 * Opens a base64 sealed payload back into plaintext.
 */
export function openPayload(sealedBase64: string, base64Key: string): string {
  const key = Buffer.from(base64Key, 'base64');
  if (key.length !== 32) {
    throw new Error('Key must be 32 bytes');
  }

  const combined = Buffer.from(sealedBase64, 'base64');
  if (combined.length <= 12 + 16) {
    throw new Error('Payload too short');
  }

  const nonce = combined.subarray(0, 12);
  const ciphertext = combined.subarray(12, combined.length - 16);
  const authTag = combined.subarray(combined.length - 16);

  const decipher = crypto.createDecipheriv('chacha20-poly1305', key, nonce, {
    authTagLength: 16
  });
  decipher.setAuthTag(authTag);

  const plaintext = Buffer.concat([
    decipher.update(ciphertext),
    decipher.final()
  ]);

  return plaintext.toString('utf8');
}

/**
 * Computes HMAC-SHA256 hex signature of a raw string body.
 */
export function computeSignature(body: string, signingKey: string): string {
  return crypto.createHmac('sha256', signingKey).update(body).digest('hex');
}
