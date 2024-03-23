import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getAllRouteSliceApi = createApi({
  reducerPath: 'getAllRouteReducerPath',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: (builder) => ({
    getAllRoutes: builder.query<any, void>({
      query: () => 'routes',
    }),
  }),
});

export const { useGetAllRoutesQuery } = getAllRouteSliceApi;
