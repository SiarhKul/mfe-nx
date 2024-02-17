import { useTranslation } from 'react-i18next';
import { Resource } from 'i18next';
import { i18nService } from './i18nService';

const useInstanceTranslation = (resources: Resource) => (namespace: string) => {
  const i18nInstance = i18nService.getOrCreateI18nInstance(namespace, {
    resources,
  });
  return useTranslation(namespace, { i18n: i18nInstance });
};

export default useInstanceTranslation;
