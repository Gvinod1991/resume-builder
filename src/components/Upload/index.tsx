import React, { useEffect, useState } from 'react';
import { UploadIcon } from '@heroicons/react/solid';
import { storage } from '../../utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
interface IUpload {
  onFileUploadSuccess: (url: string) => void;
  onFileUploadError: (error: object) => void;
}
export const Upload = ({
  onFileUploadSuccess,
  onFileUploadError,
}: IUpload): JSX.Element => {
  const [imageAsFile, setImageAsFile] = useState<any>(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const image = e.target.files?.[0];
    setImageAsFile(image);
  };
  useEffect(() => {
    // async magic goes here...
    if (imageAsFile === null) {
      //console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
      return;
    }
    const storageRef = ref(storage, `/images/${imageAsFile?.name}`);

    const uploadTask = uploadBytesResumable(storageRef, imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressPercent(progress);
        switch (snapshot.state) {
        case 'paused':
          break;
        case 'running':
          break;
        }
      },
      (error) => {
        onFileUploadError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          onFileUploadSuccess(downloadURL);
        });
      }
    );
  }, [imageAsFile]);

  return (
    <div>
      <div>
        <label className='flex flex-col items-center px-2 py-2 bg-indigo-700 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white'>
          <div className='flex flex-row'>
            <UploadIcon className='h-5' />
            <span className='text-base leading-normal'>
              {' '}
              Click here to upload
            </span>
          </div>
          <input type='file' className='hidden' onChange={handleFileChange} />
        </label>
      </div>
      <p>{imageAsFile?.name}</p>
      {progressPercent ? (
        <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
          <div
            className='bg-indigo-600 h-2.5 rounded-full'
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      ) : null}
    </div>
  );
};
