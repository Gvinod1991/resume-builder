import { ReactChild, ReactChildren } from 'react';

interface CardProps {
  children: ReactChild | ReactChildren
}

export const Card = ({ children }: CardProps) => {
  return <div
    className="p-6 mx-auto bg-white rounded-md shadow-sm border-gray-200 border-2 flex">
    {children}
  </div>
}