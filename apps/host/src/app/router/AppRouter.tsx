import { Route, Routes } from 'react-router-dom';
import NxWelcome from '../nx-welcome';
import * as React from 'react';
import { routerSchema, TRouterSchema } from '../../schemas/router.schema';

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
export default AppRouter;
