'use client';

import { MenuItem, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function LanguageChanger({ onChange }: { onChange: () => void }) {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const currentLocale = i18n.language;

  const handleChange = (e: React.MouseEvent<HTMLElement>) => {
    onChange();
    const newLocale = e.currentTarget.dataset.locale;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // Uncomment if wanting to see lang code in url, also see i18nConfig.ts
    // redirect to the new locale path
    // if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
    //   router.push('/' + newLocale + currentPathname);
    // } else {
    //   router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    // }

    router.refresh();
  };

  const languages = t('common:languages', { returnObjects: true }) as Record<string, string>;

  return (
    <>
      {Object.entries(languages).map(([locale, label]) => (
        <MenuItem key={locale} onClick={handleChange} data-locale={locale}>
          <Typography sx={{ textAlign: 'center' }} className={locale === currentLocale ? 'active' : ''}>
            {label}
          </Typography>
        </MenuItem>
      ))}
    </>
  );
}
