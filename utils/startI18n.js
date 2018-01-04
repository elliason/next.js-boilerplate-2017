import i18n from 'i18next';

const startI18n = (file, lang) => i18n.init({
  fallbackLng: lang, // the default language
  load: 'all',
  resources: file,
  ns: ['intro'],
  defaultNS: 'intro',
  debug: false
});

export default startI18n;
