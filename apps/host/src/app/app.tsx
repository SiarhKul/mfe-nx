import * as React from 'react';
import { LangSwitcher } from './componets/LangSwitcher';
import AppRouter from './router/AppRouter';
import { NavBar } from './componets/NavBar';
import { IconContext } from 'react-icons';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <IconContext.Provider
        value={{ color: 'blue', className: 'global-class-name' }}
      >
        <LangSwitcher />
        <NavBar />
        <AppRouter />
      </IconContext.Provider>
    </React.Suspense>
  );
}

export default App;
