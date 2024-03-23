// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const routerApiSlice = createApi({
  reducerPath: 'routeEditorApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  endpoints: (builder) => ({
    saveRoute: builder.mutation({
      query: (route) => ({
        url: `routes`,
        method: 'POST',
        body: route,
      }),
    }),
  }),
});

export const { useSaveRouteMutation } = routerApiSlice;
