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
import { userSliceApi } from '../../../../../apps/host/src/app/redux/apiSlices/userApiSlice';

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
      console.log('44444444444444', key, reducer);
      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },
  };
}

export const configStore = () => {
  /*  const reducerManager = createReducerManager({
    [userSliceApi.reducerPath]: userSliceApi.reducer,
  });*/

  const reducerManager = createReducerManager({});

  const config = {
    reducer: reducerManager.reduce,
    middleware: (getDefaultMiddleware: GetDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat([userSliceApi.middleware])
        .prepend(dynamicMiddleware.middleware),
    // .concat([pokemonApi.middleware]),
  };

  const store = configureStore(config);
  const persistor = persistStore(store);

  return { store, persistor, reducerManager };
};
