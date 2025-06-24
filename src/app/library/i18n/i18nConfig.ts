import { i18nRouter } from 'next-i18n-router';

type I18nConfig = Parameters<typeof i18nRouter>[1];
export const i18nNamespaces = ['activity', 'common', 'contractors', 'homes', 'owners', 'root', 'streets'];

export const i18nConfig: I18nConfig = {
  locales: ['en', 'es', 'de', 'ja'],
  defaultLocale: 'en',
  noPrefix: true,
};

// Switch to this you want lang code in url
// Also update LanguageChange and uncomment router push block
// export const i18nConfig: I18nConfig = {
//   locales: ['en', 'es', 'de', 'ja'],
//   defaultLocale: 'en',
//   prefixDefault: false,
//   noPrefix: false,
// };
