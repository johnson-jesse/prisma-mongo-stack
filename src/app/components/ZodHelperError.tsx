'use client';

import { FormHelperText } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ErrorMap } from '@/app/library/useFromStateErrors';

type Props<T extends FieldValues> = {
  name: string;
  errors: ErrorMap<T>;
};

export function ZodHelperError<T extends FieldValues>({ name, errors }: Props<T>) {
  const { t } = useTranslation();
  return name in errors && <FormHelperText error>{t(errors[name] || name)}</FormHelperText>;
}
