import { FormHelperText } from '@mui/material';
import { FieldValues } from 'react-hook-form';

import { ErrorMap } from '@src/app/library/useFromStateErrors';



type Props<T extends FieldValues> = {
  name: string;
  errors: ErrorMap<T>;
};

export function ZodHelperError<T extends FieldValues>({ name, errors }: Props<T>) {
  return name in errors && <FormHelperText error>{errors[name]}</FormHelperText>;
}
