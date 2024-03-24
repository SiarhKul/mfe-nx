import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IAttachment {
  fileName: string;
  sizeBytes: number;
  contentType: string;
}

type IAttachmentResponse = IAttachment[];

export const loadAttachmentApiSlice = createApi({
  reducerPath: 'loadAttachmentPath',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['Attachment'],
  endpoints: (build) => ({
    addAttachment: build.mutation<IAttachmentResponse, Partial<IAttachment>>({
      query(body) {
        return {
          url: `api/attachments/a3e2c246-2076-43fe-875e-f1c1d66de725`,
          method: 'POST',
          body,
        };
      },
      // Invalidates all Post-type queries providing the `LIST`
      // id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      // invalidatesTags: [{ type: 'Attachment', id: 'LIST' }],
    }),
  }),
});

export const { useAddAttachmentMutation } = loadAttachmentApiSlice;
