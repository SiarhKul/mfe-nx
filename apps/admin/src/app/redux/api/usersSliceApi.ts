import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ICity {
  id: string;
  name: string;
}

export const usersSliceApi = createApi({
  reducerPath: 'usersSliceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<ICity[], void>({
      query: () => 'city',
    }),
  }),
});

export const { useGetUsersQuery } = usersSliceApi;
