import {
  combineReducers,
  configureStore,
  createStore,
  Reducer,
} from '@reduxjs/toolkit';
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
import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

const rootReducer: any = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const configStore = () => {
  const reducerManager = createReducerManager(
    {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    [usersSliceApi.middleware, pokemonApi.middleware]
  );
  //todo: add migleware
  const config = {
    reducer: reducerManager.reduce,
    middleware: (getDefaultMiddleware: GetDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(reducerManager.getMiddlewares()),
  };

  const store = configureStore(config);
  const persistor = persistStore(store);

  return { store, persistor, reducerManager };
};

export function createReducerManager(
  initialReducers: any,
  initMiddleware: any
) {
  const reducers: any = { ...initialReducers };
  const middlewares: any = [...initMiddleware];

  let keysToRemove: any = [];

  let combinedReducer = combineReducers(reducers);

  return {
    getReducerMap: () => reducers,

    getMiddlewares: () => middlewares,
    addMiddleware: (middleware: any) => {
      middlewares.concat(middleware);
      console.log('4444444444444444', [...middlewares, ...middleware]);
      return [...middlewares, ...middleware];
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

    add: (key: any, reducer: any) => {
      // if (!key || reducers[key]) {
      //   console.log('ffffffffffffffffff');
      //   return;
      // }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

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

/*
const staticReducers = {
  users: usersReducer,
  posts: postsReducer
}

export function configureStore(initialState) {
  const reducerManager = createReducerManager(staticReducers)

  // Create a store with the root reducer function being the one exposed by the manager.
  const store = createStore(reducerManager.reduce, initialState)

  // Optional: Put the reducer manager on the store so it is easily accessible
  store.reducerManager = reducerManager
}*/
