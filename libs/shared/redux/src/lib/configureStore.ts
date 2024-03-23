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
import { userSliceApi } from '@mfe-nx/redux-navbar';
import {
  citySliceApi,
  getAllRouteSliceApi,
  routerApiSlice,
} from '@mfe-nx/redux-admin';

const dynamicMiddleware = createDynamicMiddleware();

export function createReducerManager(initialReducers: any) {
  const reducers: any = { ...initialReducers };
  // let keysToRemove: any = [];
  let combinedReducer = combineReducers(reducers);

  return {
    getReducerMap: () => reducers,

    addMiddleware: (middleware: any) => {
      console.log('dddd', middleware);
      dynamicMiddleware.addMiddleware(middleware);
    },

    reduce: (state: any, action: any) => {
      /*      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }*/

      return combinedReducer(state, action);
    },

    add: (key: any, reducer: any) => {
      // if (!key || reducers[key]) {
      //   console.log('ffffffffffffffffff');
      //   return;
      // }
      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },
  };
}

export const configStore = () => {
  const reducerManager = createReducerManager({
    [userSliceApi.reducerPath]: userSliceApi.reducer,
    [citySliceApi.reducerPath]: citySliceApi.reducer,
    [getAllRouteSliceApi.reducerPath]: getAllRouteSliceApi.reducer,
    [routerApiSlice.reducerPath]: routerApiSlice.reducer,
  });

  const config = {
    reducer: reducerManager.reduce,
    middleware: (getDefaultMiddleware: GetDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat([
          userSliceApi.middleware,
          citySliceApi.middleware,
          getAllRouteSliceApi.middleware,
          routerApiSlice.middleware,
        ])
        .prepend(dynamicMiddleware.middleware),
  };

  const store = configureStore(config);
  const persistor = persistStore(store);

  return { store, persistor, reducerManager };
};
