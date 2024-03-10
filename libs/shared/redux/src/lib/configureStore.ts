import {
  combineReducers,
  configureStore,
  createDynamicMiddleware,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { pokemonApi } from '../../../../../apps/admin/src/app/redux/api/routerEditorSliceApi';

const dynamicMiddleware = createDynamicMiddleware();
export const configStore = () => {
  const reducerManager = createReducerManager({
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  });

  const config = {
    reducer: reducerManager.reduce,
    middleware: (getDefaultMiddleware: GetDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .prepend(dynamicMiddleware.middleware)
        .concat([pokemonApi.middleware]),
  };

  const store = configureStore(config);
  const persistor = persistStore(store);

  return { store, persistor, reducerManager };
};

export function createReducerManager(initialReducers: any) {
  const reducers: any = { ...initialReducers };

  let keysToRemove: any = [];

  let combinedReducer = combineReducers(reducers);

  return {
    getReducerMap: () => reducers,
    addMiddleware: (middleware: any) => {
      dynamicMiddleware.addMiddleware(middleware);
    },

    reduce: (state: any, action: any) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (aditionReducers: any[]) => {
      aditionReducers.forEach((rds: any) => {
        reducers[rds.key] = rds.reducer;
      });
      console.log('444444444444444444', reducers);
      combinedReducer = combineReducers(reducers);
    },

    // add: (key: any, reducer: any) => {
    //   // if (!key || reducers[key]) {
    //   //   console.log('ffffffffffffffffff');
    //   //   return;
    //   // }
    //
    //   reducers[key] = reducer;
    //
    //   combinedReducer = combineReducers(reducers);
    // },

    remove: (key: any) => {
      if (!key || !reducers[key]) {
        return;
      }

      // Remove it from the reducer mapping
      delete reducers[key];

      // Add the key to the list of keys to clean up
      keysToRemove.push(key);

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },
  };
}
