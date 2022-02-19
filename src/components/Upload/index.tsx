import React, { useEffect, useState } from 'react';
import { UploadIcon, RefreshIcon } from '@heroicons/react/solid';
import { storage } from '../../utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
interface IUpload {
  onFileUploadSuccess: (url: string) => void;
  onFileUploadError: (error: object) => void;
}
const btnClasses =
  'flex flex-col items-center px-2 py-2 bg-indigo-700 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white';

export const Upload = ({
  onFileUploadSuccess,
  onFileUploadError,
}: IUpload): JSX.Element => {
  const [imageAsFile, setImageAsFile] = useState<any>(null);
  const [uploadInprogress, setUploadInprogress] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const image = e.target.files?.[0];
    if (image) {
      setImageAsFile(image);
    } else {
      setImageAsFile(null);
    }
  };

  useEffect(() => {
    handleUpload();
  }, [imageAsFile]);

  const handleUpload = (): void => {
    setErrMsg('');
    if (imageAsFile === null) {
      return;
    }
    const storageRef = ref(storage, `/images/${imageAsFile?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      'state_changed',
      () => {
        setUploadInprogress(true);
      },
      (error) => {
        onFileUploadError(error);
        setErrMsg('Image upload failed, Please try again');
        setUploadInprogress(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          onFileUploadSuccess(downloadURL);
          setUploadInprogress(false);
          setImageAsFile(null);
          setErrMsg('');
        });
      }
    );
  };
  return (
    <>
      <label
        className={
          uploadInprogress
            ? `${btnClasses} pointer-events-none bg-indigo-400`
            : btnClasses
        }
      >
        <div className='flex flex-row'>
          {uploadInprogress ? (
            <RefreshIcon className='h-5 animate-spin' />
          ) : (
            <UploadIcon className='h-5' />
          )}
          <span className='text-base leading-normal'>
            {' '}
            {uploadInprogress ? 'Uploading...' : 'Click here to upload'}
          </span>
        </div>
        <input
          disabled={uploadInprogress}
          type='file'
          className='hidden'
          onChange={handleFileChange}
        />
      </label>
      <p>{imageAsFile?.name}</p>
      {errMsg && <p className='text-red-500'>{errMsg}</p>}
    </>
  );
};
