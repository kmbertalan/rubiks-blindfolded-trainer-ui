import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import hu from './locales/hu.json';
import es from './locales/es.json';

const resources = {
  en: {
    translation: en
  },
  hu: {
    translation: hu
  },
  es: {
    translation: es
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
