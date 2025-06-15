'use server';

import { hashPassword } from '@app/library/password';
import { PrismaClient } from '@generated/prisma/client';

const prisma = new PrismaClient();

export async function createUser(_prevState: unknown, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const clearCase = formData.get('password') as string;

  console.log(name, email, clearCase);

  if (!email)
    return {
      message: 'email is required to create a user',
      name: 'email',
      error: true,
    };

  if (!clearCase)
    return {
      message: 'password is required to create a user',
      name: 'password',
      error: true,
    };

  if (clearCase.length < 8) return { message: 'password is too simple', name: 'password', error: true };

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser)
    return {
      message: 'This email is unavailable',
      name: 'email',
      error: true,
    };

  const password = await hashPassword(clearCase);

  await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return { message: 'ok', error: false };
}
