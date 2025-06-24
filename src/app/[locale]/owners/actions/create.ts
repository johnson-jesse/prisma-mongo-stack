'use server';

import z from 'zod/v4';

import { hashPassword } from '@/app/library/password';
import prisma from '@/app/library/prisma';

import { CreateUserFormState, CreateUserSchema } from '../owners.type';

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
        email: ['common:errors.fields.email.taken'],
      },
    };

  const password = await hashPassword(clearCase);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      role: "OWNER"
    },
  });

  return { id: user.id };
}
