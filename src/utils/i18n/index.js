// Dependencies
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

const initOptions = {
  debug: true,
  lng: 'en',
  fallbackLng: 'en',
  whitelist: ['en', 'es'],
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
};

i18n.use(Backend).use(initReactI18next).init(initOptions);

export default i18n;
