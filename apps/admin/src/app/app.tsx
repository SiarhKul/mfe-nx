import CountryRouteEditor from '../widgets/CountryRoutesEditor/CountryRoutEditor';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { routerApiSlice } from './redux/api/routerEditorSliceApi';
import { citySliceApi } from './redux/api/citySliceApi';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { configStore, ReduxManager } from '@mfe-nx/redux';
import { getAllRouteSliceApi } from './redux/api/getAllRouteSliceApi';
// eslint-disable-next-line @nx/enforce-module-boundaries
// import { configStore } from './redux/store/store';
// eslint-disable-next-line @nx/enforce-module-boundaries
const { persistor, store, reducerManager } = configStore();

reducerManager.add(
  getAllRouteSliceApi.reducerPath,
  getAllRouteSliceApi.reducer
);
reducerManager.add(citySliceApi.reducerPath, citySliceApi.reducer);
reducerManager.add(routerApiSlice.reducerPath, routerApiSlice.reducer);

reducerManager.addMiddleware(getAllRouteSliceApi.middleware);
reducerManager.addMiddleware(citySliceApi.middleware);
reducerManager.addMiddleware(routerApiSlice.middleware);

/*const reduxManager = new ReduxManager();
reduxManager.incrementCounter();
const counter = reduxManager.getCounter();
console.log('C2', counter);*/

export type TRootState = ReturnType<typeof store.getState>;
export function App() {
  return (
    <section className="admin">
      <Suspense fallback="Admin app is loading...">
        {/*<Provider store={store}>*/}
        <CountryRouteEditor />
        {/*</Provider>*/}
      </Suspense>
    </section>
  );
}

export default App;
