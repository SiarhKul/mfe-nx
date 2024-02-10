import * as React from 'react';
import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import { routerSchema, TRouterSchema } from '../schemas/router.schema';
import { navSchema } from '../schemas/nav.schema';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<NxWelcome />} />
    {routerSchema.map((route: TRouterSchema, i) => {
      const RemoteComponent = route.component;

      return (
        <Route
          key={i}
          path={route.path}
          element={
            <main>
              {
                <React.Suspense>
                  <RemoteComponent />
                </React.Suspense>
              }
            </main>
          }
        />
      );
    })}
  </Routes>
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        {navSchema.map((nav: any) => {
          return (
            <li key={nav.name}>
              <Link className="underline text-blue-800" to={nav.path}>
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <AppRouter />
    </React.Suspense>
  );
}

export default App;
