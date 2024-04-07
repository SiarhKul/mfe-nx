// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  IUploadedAttachmentResponse,
  useDeleteAttachmentMutation,
} from '@mfe-nx/redux-about';
import { Button } from 'primereact/button';
import React from 'react';

interface IProps {
  attachments: IUploadedAttachmentResponse[];
  onDeleteAttachment: () => Promise<void>;
}

const FileList = ({ attachments, onDeleteAttachment }: IProps) => {
  const [deleteAttachment, deletAttachmentReturn] =
    useDeleteAttachmentMutation();

  const handleDelete = async (attachment: IUploadedAttachmentResponse) => {
    await deleteAttachment(attachment.id);
    await onDeleteAttachment();
    console.log('attachment', attachment);
  };

  return (
    <div className="flex flex-col items-start">
      {attachments.map((att) => (
        <div
          key={att.id}
          className="flex gap-4 p-3 items-center  border border-zinc-400 border-solid"
        >
          <span>{att.fileName}</span>
          <span>-</span>
          <span>{att.size} Kb</span>
          <Button
            icon="pi pi-times"
            rounded
            text
            severity="danger"
            aria-label="Cancel"
            onClick={() => handleDelete(att)}
            pt={{
              root: { className: 'p-0 h-fit w-fit' },
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FileList;
