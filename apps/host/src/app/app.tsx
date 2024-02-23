import * as React from 'react';
import AppRouter from './router/AppRouter';
import { IconContext } from 'react-icons';
import { LangSwitcher } from './componets/LangSwitcher';
import { NavBar } from './componets/NavBar';
const Nav = React.lazy(() => import('navbar/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <IconContext.Provider
        value={{ color: 'blue', className: 'global-class-name' }}
      >
        <Nav />
        <LangSwitcher />
        <NavBar />
        <AppRouter />
      </IconContext.Provider>
    </React.Suspense>
  );
}

export default App;
