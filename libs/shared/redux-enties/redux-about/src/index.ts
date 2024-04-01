export {
  loadAttachmentApiSlice,
  useAddAttachmentMutation
} from './lib/apiSlice/loadAttachmentApiSlice';
export type { IAttachment } from './lib/apiSlice/loadAttachmentApiSlice';

export { loadAttachmentS3ApiSlice, useAddAttachmentS3Mutation } from './lib/apiSlice/loadAttachmentS3ApiSlice';
export { returnPresignedURLApiSlice, useReturnPresignedURLMutation } from './lib/apiSlice/returnPresignedURLApiSlice';
