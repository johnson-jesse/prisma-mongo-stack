'use client'

import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const { t } = useTranslation("root");
  return (
    <>
      <Typography variant="h1" gutterBottom>{t("title")}</Typography>
      <Typography>{t("message")}</Typography>
    </>
  );
}
