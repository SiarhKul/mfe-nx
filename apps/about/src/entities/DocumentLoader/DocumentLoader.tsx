import { FileList, FileLoader } from '../../shared/ui';
import {
  useDeleteAttachmentMutation,
  useGetAttachmentsQuery,
  useReturnPresignedURLMutation,
} from '@mfe-nx/redux-about';
import { USER_ID } from '../../shared/constants/ids';

const DocumentLoader = () => {
  const [addAttachment, addAttachmentReturn] = useReturnPresignedURLMutation();

  const {
    data: attachments,
    isSuccess,
    isError,
    refetch,
  } = useGetAttachmentsQuery(USER_ID, {
    skip: !addAttachmentReturn.isSuccess,
  });

  console.log(
    '=>(DocumentLoader.tsx:10) addAttachmentReturn1',
    addAttachmentReturn
  );

  if (addAttachmentReturn.isError || isError) {
    return <h1>Network error</h1>;
  }

  async function handleDeleteAttachment() {
    await refetch();
  }

  return (
    <div className="mt-4">
      <FileLoader addAttachment={addAttachment} />

      {isSuccess && (
        <FileList
          onDeleteAttachment={handleDeleteAttachment}
          attachments={attachments}
        />
      )}
    </div>
  );
};
export default DocumentLoader;
