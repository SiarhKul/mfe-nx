import * as React from 'react';
import AppRouter from './router/AppRouter';
import { IconContext } from 'react-icons';
import { i18nService } from '@mfe-nx/internalisation';
const Navbar = React.lazy(() => import('navbar/Module'));

export function App() {

  console.log('i18nService', i18nService.registeredInstances);
  return (
    <React.Suspense fallback={null}>
      <IconContext.Provider
        value={{ color: 'blue', className: 'global-class-name' }}
      >
        <Navbar />
        <AppRouter />
      </IconContext.Provider>
    </React.Suspense>
  );
}

export default App;
