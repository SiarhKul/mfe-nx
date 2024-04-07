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

  // console.log(
  //   '=>(DocumentLoader.tsx:10) addAttachmentReturn1',
  //   addAttachmentReturn
  // );

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
/*
* {
    "requestId": "Jpw8z-pUOk-E_aASOUqmR",
    "status": "fulfilled",
    "endpointName": "addAttachment",
    "startedTimeStamp": 1711786705274,
    "data": {
        "url": "https://cdk-hnb659fds-assets-653045635854-eu-central-1.s3.eu-central-1.amazonaws.com/a3e2c246-2076-43fe-875e-f1c1d66de725/0c13f145-8ae8-479c-a485-61ad5fffc2a2?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240330T081825Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Credential=AKIAZQDENTMHFNZEEMWN%2F20240330%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Expires=120&X-Amz-Signature=b6576a748629676b4f303bd9f542e42a86592faf2d25f4ae42fc761a9311f48f",
        "method": "PUT"
    },
    "fulfilledTimeStamp": 1711786705313,
    "isUninitialized": false,
    "isLoading": false,
    "isSuccess": true,
    "isError": false,
    "originalArgs": {
        "fileName": "Screenshot from 2024-03-29 07-52-38.png",
        "sizeBytes": 77972,
        "contentType": "image/png"
    }
}*/
