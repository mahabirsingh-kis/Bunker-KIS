import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { LocalStorageKeys } from './constants/Keys';
import { useLocalStorage } from './hooks';
import translationENG from './locales/eng/translation.json';
import translationID from './locales/bahasa/translation.json';

// the translations
const resources = {
  en: {
    translation: translationENG,
  },
  id: {
    translation: translationID,
  },
};

const eng = 'en';

// eslint-disable-next-line react-hooks/rules-of-hooks
const localStorage = useLocalStorage();
const language = localStorage.getItem(LocalStorageKeys.i18nLanguage);
if (!language) {
  const sysLang = navigator.language;
  const langs = Object.keys(resources);
  if (langs.includes(sysLang)) {
    localStorage.setItem(LocalStorageKeys.i18nLanguage, sysLang);
  } else {
    localStorage.setItem(LocalStorageKeys.i18nLanguage, eng);
  }
}

if (language === 'eng') {
  localStorage.setItem(LocalStorageKeys.i18nLanguage, eng);
}

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem(LocalStorageKeys.i18nLanguage) || eng,
    fallbackLng: eng, // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
