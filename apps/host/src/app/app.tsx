import * as React from 'react';
import AppRouter from './router/AppRouter';
import { IconContext } from 'react-icons';
import { PrimeReactProvider } from 'primereact/api';
const Navbar = React.lazy(() => import('navbar/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <PrimeReactProvider>
        <IconContext.Provider
          value={{ color: 'blue', className: 'global-class-name' }}
        >
          <main className="bg-stone-400">
            <Navbar />
            <AppRouter />
          </main>
        </IconContext.Provider>
      </PrimeReactProvider>
    </React.Suspense>
  );
}

export default App;
