import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { XIcon } from '@heroicons/react/solid';
import { Button, Typography } from '..';

interface IModal {
  children: ReactNode;
  open: boolean;
  title: string;
  style?: object;
  titleStyle?: string;
  className?: string;
  saveBtnTitle?: string;
  hideCancelBtn?: boolean;
  onClose: () => void;
  onSave?: () => void;
}

export const Modal = ({
  open,
  children,
  title,
  className,
  titleStyle,
  saveBtnTitle,
  hideCancelBtn,
  onClose,
  onSave,
}: IModal): JSX.Element | null => {
  if (!open) return null;
  return createPortal(
    <>
      <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-70 z-50' />
      <div
        className={`fixed rounded-md p-5 z-50 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 overflow-y-scroll 
        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded ${className}`}
      >
        <div className='flex flex-row justify-between'>
          <Typography variant='h2' className={`text-xl ${titleStyle}`}>
            {title}
          </Typography>
          <XIcon onClick={onClose} className='w-6 h-6 cursor-pointer' />
        </div>
        <div>{children}</div>

        <div className='flex flex-row justify-end'>
          {onSave ? (
            <Button
              onClick={onSave}
              className='m-1'
              title={saveBtnTitle ? saveBtnTitle : 'Ok'}
            ></Button>
          ) : null}
          {!hideCancelBtn ? (
            <Button onClick={onClose} className='m-1' title='Cancel'></Button>
          ) : null}
        </div>
      </div>
    </>,
    document.getElementById('portal') as HTMLElement
  );
};
