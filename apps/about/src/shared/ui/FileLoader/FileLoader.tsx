import InputFile from '../InputFile/InputFile';
import { Button } from 'primereact/button';

const FileLoader = () => {
  return (
    <form
      method="post"
      encType="multipart/form-data"
      className="flex flex-col gap-4"
    >
      <InputFile />
      {/*<div className="preview">*/}
      {/*  <p>No files currently selected for upload</p>*/}
      {/*</div>*/}
      <Button className="self-start" type="submit" label="Submit" />
    </form>
  );
};
export default FileLoader;
