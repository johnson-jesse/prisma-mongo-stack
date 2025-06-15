import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function hashPassword(clearCase: string): Promise<string> {
  return await bcrypt.hash(clearCase, SALT_ROUNDS);
}

export async function isPasswordValid(clearCase: string, hashPassword: string) {
    return await bcrypt.compare(clearCase, hashPassword)
}
