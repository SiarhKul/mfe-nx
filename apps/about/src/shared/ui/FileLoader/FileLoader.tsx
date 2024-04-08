import InputFile from '../InputFile/InputFile';
import { useAddAttachmentMutation } from '@mfe-nx/redux-about';
import { useState } from 'react';

type TUseAddAttachmentMutation = ReturnType<typeof useAddAttachmentMutation>;
type TAddAttachment = TUseAddAttachmentMutation['0'];

interface IProps {
  addAttachment: any;
}

const FileLoader = ({ addAttachment }: IProps) => {
  const [_, setFileList] = useState<FileList>();

  async function handleInputFileChange(files: FileList) {
    setFileList(files);

    for (const file of Array.from(files)) {
      await addAttachment(file);
    }
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
      {/*<Button className="self-start" type="submit" label="Submit" />*/}
    </form>
  );
};
export default FileLoader;
