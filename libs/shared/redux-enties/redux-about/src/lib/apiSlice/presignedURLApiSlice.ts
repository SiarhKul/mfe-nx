import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError } from 'axios';

interface IAttachment {
  fileName: string;
  sizeBytes: number;
  contentType: string;
}

type IAttachmentResponse = IAttachment[];

export function isFetchBaseQueryError(
  error: unknown,
): error is AxiosError {
  return typeof error === 'object' && error != null && 'status' in error
}

export const loadAttachmentApiSlice = createApi({
  reducerPath: 'presignedURLApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['PresignedURLTag'],
  endpoints: (build) => ({
    loadAttachment: build.mutation<IAttachmentResponse, IAttachment>({
      queryFn: async (body) => {
        try {
          const result = await axios({
            url: `api/attachments/a3e2c246-2076-43fe-875e-f1c1d66de725`,
            method: "POST",
            data: body,
          })
          return { data: result.data }
        } catch (axiosError) {
          // const err = axiosError as AxiosError
          if(isFetchBaseQueryError(axiosError)){
            return {
              error: {
                status: axiosError.response?.status,
                data: axiosError.response?.data || axiosError.message,
              } ,
            }
          }
          return { error: { status: '400', data: [] as any } }

          // return {
          //   error: {
          //     status: err.response?.status,
          //     data: err.response?.data || err.message,
          //   } ,
          // }
        }
      }
    })
  })
});

export const { useLoadAttachmentMutation } = loadAttachmentApiSlice;
