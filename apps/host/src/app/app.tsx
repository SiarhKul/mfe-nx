import * as React from 'react';
import AppRouter from './router/AppRouter';
import { IconContext } from 'react-icons';
import { i18nService } from '@mfe-nx/internalisation';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import Tailwind from 'primereact/passthrough/tailwind';
// import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';
// import 'primereact/resources/primereact.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
const Navbar = React.lazy(() => import('navbar/Module'));
export function App() {
  return (
    <React.Suspense fallback={null}>
      <PrimeReactProvider>
        <IconContext.Provider
          value={{ color: 'blue', className: 'global-class-name' }}
        >
          <Navbar />
          <AppRouter />
        </IconContext.Provider>
      </PrimeReactProvider>
    </React.Suspense>
  );
}

export default App;
