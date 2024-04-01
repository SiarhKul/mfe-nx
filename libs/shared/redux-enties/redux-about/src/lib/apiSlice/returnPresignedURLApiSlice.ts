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
const USER_ID = 'a3e2c246-2076-43fe-875e-f1c1d66de725';
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


      await axios({
        url: `${baseUrl}${url}/${result.data.id}`,
        method: 'PUT',
      })


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
          url: `api/attachments/${USER_ID}`,
          // url: `api/attachments/a3e2c246-2076-43fe-875e-f1c1d66de725`,
          method: 'POST',
          downloadableFile,
          // data: body
        });
      }
    })
  })
});

export const { useReturnPresignedURLMutation } = returnPresignedURLApiSlice;
// {
//   "data": {
//   "id": "84c28d4c-e848-4654-923a-1612ddbd127f",
//     "url": "https://bus-order-bucket.s3.eu-central-1.amazonaws.com/a3e2c246-2076-43fe-875e-f1c1d66de725/84c28d4c-e848-4654-923a-1612ddbd127f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240401T134240Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Credential=AKIAZQDENTMHFNZEEMWN%2F20240401%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Expires=120&X-Amz-Signature=d9450878784a505b5e5bff24d9a82dd68e0a19bbad507c7067141177bfd583b4",
//     "method": "PUT"
// },
//   "status": 200,
//   "statusText": "",
//   "headers": {
//   "content-type": "application/json"
// },
//   "config": {
//   "transitional": {
//     "silentJSONParsing": true,
//       "forcedJSONParsing": true,
//       "clarifyTimeoutError": false
//   },
//   "adapter": [
//     "xhr",
//     "http"
//   ],
//     "transformRequest": [
//     null
//   ],
//     "transformResponse": [
//     null
//   ],
//     "timeout": 0,
//     "xsrfCookieName": "XSRF-TOKEN",
//     "xsrfHeaderName": "X-XSRF-TOKEN",
//     "maxContentLength": -1,
//     "maxBodyLength": -1,
//     "env": {},
//   "headers": {
//     "Accept": "application/json, text/plain, */*",
//       "Content-Type": "application/json"
//   },
//   "url": "http://localhost:8080/api/attachments/a3e2c246-2076-43fe-875e-f1c1d66de725",
//     "method": "post",
//     "data": "{\"fileName\":\"Screenshot from 2024-03-29 07-56-11.png\",\"sizeBytes\":51771,\"contentType\":\"image/png\"}"
// },
//   "request": {}
// }
