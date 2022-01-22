import { ReactChild, ReactChildren } from "react";
import { createPortal } from 'react-dom';
import { XIcon } from '@heroicons/react/solid';
import { Button, Typography } from "..";

interface ModalProps {
  children: ReactChild | ReactChildren,
  open: boolean,
  title: string,
  style?: object,
  className?: string,
  onClose: () => void
}

export const Modal = ({ open, children, title, className, onClose }: ModalProps) => {
  if (!open) return null;
  return createPortal(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-70 z-50" />
      <div className={`fixed rounded-md p-5 z-50 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}>
        <div className="flex flex-row justify-between">
          <Typography variant="h2" className="text-xl" >{title}</Typography>
          <XIcon onClick={onClose} className="w-6 h-6 cursor-pointer" />
        </div>
        <div>
          {children}
        </div>
        <div className="flex flex-row justify-end">
          <Button onClick={onClose} className="m-1" title="Ok"></Button>
          <Button onClick={onClose} className="m-1" title="Cancel"></Button>
        </div>
      </div>
    </>,
    document.getElementById('portal') as HTMLElement
  )
}