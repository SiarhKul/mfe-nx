import * as React from 'react';

import { Link } from 'react-router-dom';
import { navSchema } from '../schemas/nav.schema';
import { LangSwitcher } from './componets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import AppRouter from './router/AppRouter';
import { NavBar } from './componets/NavBar';

//todo: add transitions
export function App() {
  const { t } = useTranslation('nav');

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
