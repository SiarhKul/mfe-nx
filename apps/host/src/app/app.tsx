import * as React from 'react';
import { LangSwitcher } from './componets/LangSwitcher';
import AppRouter from './router/AppRouter';
import { NavBar } from './componets/NavBar';
import useTranslationHost from '../i18n/useTranslationHost';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <LangSwitcher />
      <NavBar />
      <AppRouter />
    </React.Suspense>
  );
}

export default App;
