'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, CardActions, CardContent, CardHeader, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { useActionState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useFormStateErrors } from '@src/app/library/useFromStateErrors';
import { CreateUserFormState, CreateUserSchema, DefaultCreateUser, type CreateUser } from '@src/app/owners/type';


import { ZodHelperError } from '../common/ZodHelperError';
import { createUser } from './actions/create';

const READONLY_OBJECT = {} as const;

export function CreateUser() {
  const { control, trigger, formState } = useForm<CreateUser>({
    defaultValues: DefaultCreateUser,
    resolver: zodResolver(CreateUserSchema),
  });
  const [state, formAction, pending] = useActionState(createUser, READONLY_OBJECT as CreateUserFormState);
  const errors = useFormStateErrors(state, formState.errors);
  
  const handleSubmitClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    trigger().then((isValid) => {
      if (!isValid) e.preventDefault();
    });
  };

  return (
    <form noValidate action={formAction}>
      <Card raised sx={{ width: 'fit-content', padding: 1 }}>
        <CardHeader title="Create Owner" />
        <CardContent sx={{ display: 'flex', gap: 4 }}>
          <FormControl error={'name' in errors}>
            <InputLabel htmlFor="user-name">Name</InputLabel>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <OutlinedInput id="user-name" label="Name" size="small" {...field} />}
            />
            <ZodHelperError name="name" errors={errors} />
          </FormControl>
          <FormControl required error={'email' in errors}>
            <InputLabel htmlFor="user-email">Email</InputLabel>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <OutlinedInput id="user-email" label="Email" size="small" {...field} />}
            />
            <ZodHelperError name="email" errors={errors} />
          </FormControl>
          <FormControl required error={'password' in errors}>
            <InputLabel htmlFor="user-password">Password</InputLabel>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <OutlinedInput id="user-password" label="Password" size="small" {...field} />}
            />
            <ZodHelperError name="password" errors={errors} />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            size="small"
            loading={pending}
            disabled={pending}
            onClick={handleSubmitClick}
          >
            Create Owner
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
