import { z } from 'zod/v4';

import { ActionErrors } from '@/app/library/useFromStateErrors';

export const CreateUserSchema = z.object({
  name: z.string().optional(),
  email: z.email({ error: 'common:errors.fields.required' }),
  password: z.string().min(8, { error: (iss) => (!iss.input ? 'common:errors.fields.required' : 'common:errors.fields.password.short') }),
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
