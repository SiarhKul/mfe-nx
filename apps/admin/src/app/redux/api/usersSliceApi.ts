import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersSliceApi = createApi({
  reducerPath: 'usersSliceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => 'users',
    }),
  }),
});

export const { useGetUsersQuery } = usersSliceApi;
