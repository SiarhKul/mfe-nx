import CountryRouteEditor from '../widgets/CountryRoutesEditor/CountryRoutEditor';
import { configStore } from './redux/store/store';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { combineReducers } from '@reduxjs/toolkit';
import { pokemonApi } from './redux/api/routerEditorSliceApi';
import { usersSliceApi } from './redux/api/usersSliceApi';

const { store, persistor } = configStore();
export type TRootState = ReturnType<typeof store.getState>;

const newRootReducer = combineReducers({
  [usersSliceApi.reducerPath]: usersSliceApi.reducer,
});

store.replaceReducer(newRootReducer);

export function App() {
  return (
    <section className="admin">
      <Suspense fallback="Admin app is loading...">
        <Provider store={store}>
          {/*<PersistGate persistor={persistor} loading="...Loading persistor">*/}
          <CountryRouteEditor />
          {/*</PersistGate>*/}
        </Provider>
      </Suspense>
    </section>
  );
}

export default App;
