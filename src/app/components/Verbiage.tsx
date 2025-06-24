'use client';

import { Typography, TypographyProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = { path: string } & TypographyProps

export function Verbiage({ path, ...others }: Props) {
  const { t } = useTranslation();
  return (
    <Typography {...others}>
      {t(path)}
    </Typography>
  );
}

export function Title(props: Props) {
  return <Verbiage variant="h1" {...props} />
}