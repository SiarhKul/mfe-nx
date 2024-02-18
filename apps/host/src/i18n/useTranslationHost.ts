import translationEn from '../i18n/en/nav.json';
import translationRu from '../i18n/ru/nav.json';
import { useInstanceTranslation } from '@mfe-nx/internalisation';

const NAMESPACE = 'host';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useTranslation = useInstanceTranslation({
  'en-GB': { [NAMESPACE]: translationEn },
  ru: { [NAMESPACE]: translationRu },
});

const useTranslationHost = () => useTranslation(NAMESPACE);

export default useTranslationHost;
