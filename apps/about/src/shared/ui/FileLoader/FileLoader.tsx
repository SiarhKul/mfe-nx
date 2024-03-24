import InputFile from '../InputFile/InputFile';
import { Button } from 'primereact/button';
import { IAttachment, useAddAttachmentMutation } from '@mfe-nx/redux-about';
import { useState } from 'react';

type TUseAddAttachmentMutation = ReturnType<typeof useAddAttachmentMutation>;
type TAddAttachment = TUseAddAttachmentMutation['0'];

interface IProps {
  addAttachment: TAddAttachment;
}

const FileLoader = ({ addAttachment }: IProps) => {
  const [fileList, setFileList] = useState<FileList>();

  function handleInputFileChange(files: FileList) {
    const file = files[0];
    const attachemt: IAttachment = {
      fileName: file.name,
      sizeBytes: file.size,
      contentType: file.type,
    };
    addAttachment(attachemt);
    setFileList(files);
  }

  return (
    <form
      method="post"
      encType="multipart/form-data"
      className="flex flex-col gap-4"
    >
      <InputFile addFile={handleInputFileChange} />
      {/*<div className="preview">*/}
      {/*  <p>No files currently selected for upload</p>*/}
      {/*</div>*/}
      <Button className="self-start" type="submit" label="Submit" />
    </form>
  );
};
export default FileLoader;
