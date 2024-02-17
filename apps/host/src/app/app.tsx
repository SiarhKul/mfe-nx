import * as React from 'react';
import { LangSwitcher } from './componets/LangSwitcher';
import AppRouter from './router/AppRouter';
import { NavBar } from './componets/NavBar';
import useTranslationHost from '../i18n/useTranslationHost';

export function App() {
  const { t } = useTranslationHost();
  return (
    <React.Suspense fallback={null}>
      <LangSwitcher />
      <h1>{t('home')}</h1>
      <NavBar />
      <AppRouter />
    </React.Suspense>
  );
}

export default App;
