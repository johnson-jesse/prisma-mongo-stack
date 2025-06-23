import { z } from 'zod/v4';

import { ActionErrors } from '@/app/library/useFromStateErrors';

export const CreateUserSchema = z.object({
  name: z.string().optional(),
  email: z.email({ error: 'Field is required' }),
  password: z.string().min(8, { error: (iss) => (!iss.input ? 'Field is required' : 'Too short') }),
});

export type CreateOwner = z.infer<typeof CreateUserSchema>;

export const DefaultCreateUser: CreateOwner = {
  name: '',
  email: '',
  password: '',
};

export type Ident = string;

export interface CreateUserFormState extends ActionErrors {
  id?: Ident;
};
