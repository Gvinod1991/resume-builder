import { ReactChild, ReactChildren } from 'react';

interface WrapperProps {
  className?: string,
  children?: ReactChild | ReactChildren
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={`p-1 ${className}`}>
      {children}
    </div>
  )
}