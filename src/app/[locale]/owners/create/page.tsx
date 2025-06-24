'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, CardActions, CardContent, CardHeader, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { useActionState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ZodHelperError } from '@/app/components/ZodHelperError';
import { useFormStateErrors } from '@/app/library/useFromStateErrors';

import { createUser } from '../actions/create';
import { CreateOwner, CreateUserFormState, CreateUserSchema, DefaultCreateUser } from '../owners.type';

const READONLY_OBJECT = {} as const;

export default function Page() {
  const { t } = useTranslation('owners');
  const { control, trigger, formState } = useForm<CreateOwner>({
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
        <CardHeader title={t('title')} />
        <CardContent sx={{ display: 'flex', gap: 4 }}>
          <FormControl error={'name' in errors}>
            <InputLabel htmlFor="user-name">{t('fields.name')}</InputLabel>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <OutlinedInput id="user-name" label={t('fields.name')} size="small" {...field} />}
            />
            <ZodHelperError name="name" errors={errors} />
          </FormControl>
          <FormControl required error={'email' in errors}>
            <InputLabel htmlFor="user-email">{t('fields.email')}</InputLabel>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <OutlinedInput id="user-email" label={t('fields.email')} size="small" {...field} />}
            />
            <ZodHelperError name="email" errors={errors} />
          </FormControl>
          <FormControl required error={'password' in errors}>
            <InputLabel htmlFor="user-password">{t('fields.password')}</InputLabel>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <OutlinedInput id="user-password" label={t('fields.password')} size="small" {...field} />
              )}
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
            {t('fields.action')}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
