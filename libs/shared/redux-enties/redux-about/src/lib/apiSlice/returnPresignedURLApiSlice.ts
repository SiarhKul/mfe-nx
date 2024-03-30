import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';

type TBaseAxiosQuery = { baseUrl: string }

const axiosBaseQuery = ({ baseUrl }: TBaseAxiosQuery = { baseUrl: '' }): BaseQueryFn<
  {
    url: string
    method?: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
    headers?: AxiosRequestConfig['headers']
  },
  unknown,
  unknown
> =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      };
    }
  };

interface IAttachment {
  fileName: string;
  sizeBytes: number;
  contentType: string;
}

type IAttachmentResponse = IAttachment[];

export const returnPresignedURLApiSlice = createApi({
  reducerPath: 'returnPresignedPath',
  tagTypes: ['returnPresignedURLApiSlice'],
  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:8080/'
  }),
  endpoints: (build) => ({
    returnPresignedURL: build.mutation<IAttachmentResponse, IAttachment>({
      query: (body) => {
        return ({
          url: `api/attachments/a3e2c246-2076-43fe-875e-f1c1d66de725`,
          method: 'POST',
          data: body
        });
      }
    })
  })
});

export const { useReturnPresignedURLMutation } = returnPresignedURLApiSlice;
