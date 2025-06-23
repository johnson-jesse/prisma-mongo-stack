import { useMemo, useState } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';

export interface ActionErrors {
  errors?: Record<string, string[]>;
}

export type ErrorMap<T extends FieldValues> = Partial<Record<keyof T, string>>;
const ERRORS = {} as const;

export function useFormStateErrors<T extends FieldValues>(state: ActionErrors, form: FieldErrors<T>) {
  const [errors, setErrors] = useState<ErrorMap<T>>(ERRORS);

  useMemo(() => {
    const raw = state.errors ?? {};

    const result = Object.entries(raw).reduce((acc, [key, messages]) => {
      if (Array.isArray(messages) && messages.length > 0) {
        acc[key as keyof T] = messages[0];
      }
      return acc;
    }, {} as Partial<Record<keyof T, string>>);

    setErrors(result);
  }, [state]);

  useMemo(() => {
    setErrors(
      Object.entries(form).reduce(
        (prev, [key, value]) => ({
          ...prev,
          [key]: value?.message,
        }),
        {},
      ),
    );
  }, [form]);

  return errors;
}
