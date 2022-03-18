import { PencilAltIcon } from '@heroicons/react/solid';
import React from 'react';

export const Logo = (): JSX.Element => {
  return (
    <div className='flex-shrink-0 flex items-center p-4'>
      <h1 className='text-gray-50 rounded-md text-lg font-medium font-mono hidden lg:block'>
        <PencilAltIcon className='w-8 cursor-pointer inline' />
        <span className='relative top-1 font-bold text-lg uppercase'>
          ResumeSmith
        </span>
      </h1>
      <h1 className='text-gray-50 rounded-md text-lg font-medium font-mono block lg:hidden'>
        <PencilAltIcon className='w-8 cursor-pointer inline' />
      </h1>
    </div>
  );
};
