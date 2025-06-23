'use client'

import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { CreateUser } from './CreateOwner';

export default function Page() {
  const { t } = useTranslation("owners");
  return (
    <>
      <Typography variant="h1" gutterBottom>{t("title")}</Typography>
      <CreateUser />
    </>
  );
}
