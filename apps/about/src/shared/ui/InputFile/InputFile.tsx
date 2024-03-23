import { useState } from 'react';

const InputFile = () => {
  const [file, setFile] = useState();
  console.log('=>(InputFile.tsx:5) file', file);

  function handleChange(event: any) {
    setFile(event.target.files[0]);
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
