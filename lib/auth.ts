import bcrypt from 'bcryptjs';

/**
 * Compares a plaintext password with a hashed password to check for a match.
 * @param password - The plaintext password to verify.
 * @param hashedPassword - The hashed password to compare against.
 * @returns A promise that resolves with the comparison result.
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}
