import { FileLoader } from '../../shared/ui';
import { useAddAttachmentMutation } from '@mfe-nx/redux-about';

const DocumentLoader = () => {
  const [addAttachment, addAttachmentReturn] = useAddAttachmentMutation();

  return (
    <div className="mt-4">
      <FileLoader addAttachment={addAttachment} />
    </div>
  );
};
export default DocumentLoader;
