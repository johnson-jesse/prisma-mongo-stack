'use server';

import z from 'zod/v4';

import { PrismaClient } from '@_/generated/prisma/client';
import { hashPassword } from '@_app/library/password';

import { CreateUserSchema, CreateUserFormState } from '../type';

const prisma = new PrismaClient();

export async function createUser(_prevState: unknown, formData: FormData): Promise<CreateUserFormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const clearCase = formData.get('password') as string;

  const result = CreateUserSchema.safeParse({ name, email, password: clearCase });
  if (!result.success) {    
    return { errors: z.flattenError(result.error).fieldErrors };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser)
    return {
      errors: {
        email: ['This email is unavailable'],
      },
    };

  const password = await hashPassword(clearCase);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return { id: user.id };
}
