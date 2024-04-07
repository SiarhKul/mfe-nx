import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const deleteAttachmentApiSlice = createApi({
  reducerPath: 'deleteAttachmentPath',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['deleteAttachment'],
  endpoints: (builder) => ({
    deleteAttachment: builder.mutation<void, string>({
      query: (id) => ({
        url: `api/attachments/a3e2c246-2076-43fe-875e-f1c1d66de725/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
export const {
  useDeleteAttachmentMutation,
  reducer: deleteAttachmentReducer,
  reducerPath: deleteAttachmentPath,
  middleware: deleteAttachmentMiddleware,
} = deleteAttachmentApiSlice;
