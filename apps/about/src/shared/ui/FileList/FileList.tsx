import { IUploadedAttachmentResponse } from '@mfe-nx/redux-about';
import { Button } from 'primereact/button';
import React from 'react';

interface IProps {
  attachments: IUploadedAttachmentResponse[];
}

const FileList = ({ attachments }: IProps) => {

  return (
    <div>
      <div className="border-4 border-indigo-500/100 ">22222</div>
      <div className="border border-sky-500">111111</div>
      {attachments.map((att) => <div
        className="flex gap-4 p-3 items-center"
      >
        <span>{att.fileName}</span>
        <span>-</span>
        <span>{att.size}</span>
        <Button pt={{
          root: { className: 'p-0 h-fit w-fit',  }
        }} icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" />
      </div>)}
    </div>
  );
};

export default FileList;
