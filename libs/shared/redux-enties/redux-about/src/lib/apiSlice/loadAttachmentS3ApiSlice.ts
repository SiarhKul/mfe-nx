import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type AttachmentS3Response = any
type AttachmentS3Body = any

export const loadAttachmentS3ApiSlice = createApi({
  reducerPath:'loadAttachmentS3Path',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['AttachmentS3'],
  endpoints: (build) => ({
    addAttachmentS3: build.mutation<AttachmentS3Response, AttachmentS3Body>({
      query(body){

        console.log('===============body', body);
        return ''
        // return{
        //   url: 'api/attachments/s3',
        //   method: 'PUT',
        //   body,
        // }
      }
    })
  })
})

export const { useAddAttachmentS3Mutation } = loadAttachmentS3ApiSlice;
