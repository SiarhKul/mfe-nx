import { configStore } from '@mfe-nx/redux';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { userSliceApi } from '../../../../../../apps/host/src/app/redux/apiSlices/userApiSlice';

const { persistor, store, reducerManager } = configStore();

// reducerManager.add(userSliceApi.reducerPath, userSliceApi.reducer);
reducerManager.addMiddleware(userSliceApi.middleware);
