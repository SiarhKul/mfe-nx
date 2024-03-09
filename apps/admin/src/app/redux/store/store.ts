import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { pokemonApi } from '../api/routerEditorSliceApi';
import logger from 'redux-logger';
import { object } from 'yup';
import { usersSliceApi } from '../api/usersSliceApi';

const rootReducer: any = combineReducers({
  // [usersSliceApi.reducerPath]: usersSliceApi.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const superRootReducer = {};

export const addReducerToCombineReducersFn = (asyncReducers = object) => {
  return combineReducers({ ...asyncReducers, ...superRootReducer });
};

console.log('rootReducer', superRootReducer);
export const configStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        // .concat(logger)
        .concat(pokemonApi.middleware)
        .concat(usersSliceApi.middleware),
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
