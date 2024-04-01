import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';

type IAttachmentResponse = IAttachment[];
type TBaseAxiosQuery = { baseUrl: string }
interface IAttachment {
  fileName: string;
  sizeBytes: number;
  contentType: string;
}

const axiosBaseQuery = ({ baseUrl }: TBaseAxiosQuery = { baseUrl: '' }):
  BaseQueryFn<{
    url: string
    method?: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
    headers?: AxiosRequestConfig['headers']
    downloadableFile: File
  },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers,downloadableFile }) => {
    const attachmemt: IAttachment = {
      fileName: downloadableFile.name,
      sizeBytes: downloadableFile.size,
      contentType: downloadableFile.type,
    };

    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data:attachmemt,
        params,
        headers
      });

      // const s3response =await axios({
      //   url: result.data.url,
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': downloadableFile.type,
      //   },
      //   data: downloadableFile
      // })

      console.log("=>(returnPresignedURLApiSlice.ts:27) data", result);
      // console.log("=>(returnPresignedURLApiSlice.ts:45) s3response", s3response);

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

export const returnPresignedURLApiSlice = createApi({
  reducerPath: 'returnPresignedPath',
  tagTypes: ['returnPresignedURLApiSlice'],
  baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (build) => ({
    returnPresignedURL: build.mutation<IAttachmentResponse, File>({
      query: (downloadableFile) => {
        return ({
          url: `api/attachments/a3e2c246-2076-43fe-875e-f1c1d66de725`,
          method: 'POST',
          downloadableFile,
          // data: body
        });
      }
    })
  })
});

export const { useReturnPresignedURLMutation } = returnPresignedURLApiSlice;
