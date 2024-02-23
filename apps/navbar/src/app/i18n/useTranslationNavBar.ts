import translationEn from '../i18n/en/nav.json';
import translationRu from '../i18n/ru/nav.json';
import { useInstanceTranslation } from '@mfe-nx/internalisation';

const NAMESPACE = 'navbar';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useTranslation = useInstanceTranslation({
  'en-GB': { [NAMESPACE]: translationEn },
  ru: { [NAMESPACE]: translationRu },
});

const useTranslationNavBar = () => useTranslation(NAMESPACE);

export default useTranslationNavBar;
