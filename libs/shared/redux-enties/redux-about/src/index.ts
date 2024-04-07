export {
  loadAttachmentApiSlice,
  useAddAttachmentMutation,
} from './lib/apiSlice/loadAttachmentApiSlice';
export type { IAttachment } from './lib/apiSlice/loadAttachmentApiSlice';
export type { IUploadedAttachmentResponse } from './lib/apiSlice/getAttachmentsApiSlice';

export {
  returnPresignedURLApiSlice,
  useReturnPresignedURLMutation,
} from './lib/apiSlice/returnPresignedURLApiSlice';
export {
  getAttachmentsApiSlice,
  useGetAttachmentsQuery,
} from './lib/apiSlice/getAttachmentsApiSlice';
export {
  deleteAttachmentApiSlice,
  useDeleteAttachmentMutation,
  deleteAttachmentPath,
  deleteAttachmentReducer,
  deleteAttachmentMiddleware,
} from './lib/apiSlice/deleteAttachmentApiSlice';
