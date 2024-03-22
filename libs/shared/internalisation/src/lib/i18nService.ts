import { initReactI18next } from 'react-i18next';
import i18next, { i18n as I18n, InitOptions as I18nInitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export type I18nAvailableInitOptions = Omit<
  I18nInitOptions,
  | 'initImmediate'
  | 'debug'
  | 'fallbackLng'
  | 'supportedLngs'
  | 'interpolation'
  | 'detection'
>;

export const i18nService = {
  registeredInstances: new Map<string, I18n>(),

  async changeLanguage(language: string): Promise<void> {
    for (const i18nInstance of this.registeredInstances.values()) {
      await i18nInstance.changeLanguage(language);
    }
  },

  getI18nInstance(instanceName: string): I18n | undefined {
    return this.registeredInstances.get(instanceName);
  },

  getOrCreateI18nInstance(
    instanceName: string,
    initOptions: I18nInitOptions | undefined
  ): I18n {
    return this.registeredInstances.has(instanceName)
      ? (this.registeredInstances.get(instanceName) as I18n)
      : this.createAndRegisterI18nInstance(instanceName, initOptions);
  },

  createAndRegisterI18nInstance(
    instanceName: string,
    options?: I18nAvailableInitOptions
  ): I18n {
    // this.primeLanguageService();
    // const isDev = localStorage.getItem('local_dev') !== null;
    const initOptions: I18nInitOptions = {
      ...options,
      debug: true,
      fallbackLng: 'en-GB',
      supportedLngs: _getSupportedLngs(),
      load: 'currentOnly',
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'navigator'],
      },
      initImmediate: false,
      returnNull: false,
    };

    const newInstance = i18next
      .createInstance()
      .use(initReactI18next)
      .use(LanguageDetector);

    newInstance.init(initOptions);

    this.registeredInstances.set(instanceName, newInstance);

    return newInstance;
  },
};

//--------------------------------------------- local helper function
const _isDev = () => {
  if (!window) return false;

  const hostname = window.location.hostname;
  return (
    hostname === 'localhost' || window.location.host.split('.')[0] === 'dev'
  );
};

const _getSupportedLngs = () => {
  const langs = ['en-GB', 'ru'];
  if (_isDev()) {
    // For in-context translation mode
    langs.push('ach-UG');
  }
  return langs;
};

console.log(i18nService.registeredInstances);
