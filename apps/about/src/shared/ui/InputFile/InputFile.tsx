import { ChangeEvent, useState } from 'react';

interface IProps {
  addFile: (files: FileList) => void;
}

const InputFile = ({ addFile }: IProps) => {
  const [file, setFile] = useState<FileList>();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const addedFiles = event.target.files;

      addFile(addedFiles);
      setFile(addedFiles);
    }
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="image_uploads">Choose images to upload (PNG, JPG)</label>
      <input
        className="self-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="file"
        id="image_uploads"
        name="image_uploads"
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={handleChange}
      />
    </div>
  );
};
export default InputFile;
