import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSliceApi = createApi({
  reducerPath: 'userSliceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/users',
  }),
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => '1',
    }),
  }),
});

export const { useGetUserQuery } = userSliceApi;
