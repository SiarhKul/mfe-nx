import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsEN from './i18n/en/nav.json';
import translationsRU from './i18n/ru/nav.json';

const resources = {
  en: {
    nav: translationsEN,
  },
  ru: {
    nav: translationsRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
