'use client';

import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const { t } = useTranslation('homes');
  return <Typography variant="h1">{t('title')}</Typography>;
}
