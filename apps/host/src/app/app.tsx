import * as React from 'react';
import AppRouter from './router/AppRouter';
import { IconContext } from 'react-icons';
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { configStore, ReduxManager } from '@mfe-nx/redux';
// eslint-disable-next-line @nx/enforce-module-boundaries
const Navbar = React.lazy(() => import('navbar/Module'));

const { persistor, store, reducerManager } = configStore();
/*const reduxManager = new ReduxManager();
reduxManager.incrementCounter();
reduxManager.incrementCounter();
const counter = reduxManager.getCounter();
console.log('C1', counter);*/

console.log('ENV', process.env);
export function App() {
  return (
    <React.Suspense fallback={null}>
      <PrimeReactProvider>
        <Provider store={store}>
          <IconContext.Provider
            value={{ color: 'blue', className: 'global-class-name' }}
          >
            <div>
              {/*<div className="host">*/}
              <Navbar />
              <AppRouter />
            </div>
          </IconContext.Provider>
        </Provider>
      </PrimeReactProvider>
    </React.Suspense>
  );
}

export default App;
