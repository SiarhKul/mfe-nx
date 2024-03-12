import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ICity {
  id: string;
  name: string;
}

export const citySliceApi = createApi({
  reducerPath: 'citySliceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
  }),
  endpoints: (builder) => ({
    getCity: builder.query<ICity[], void>({
      query: () => 'city',
    }),
  }),
});

export const { useGetCityQuery } = citySliceApi;
