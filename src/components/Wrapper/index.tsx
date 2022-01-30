import { HTMLAttributes, ReactNode } from 'react';

interface IWrapper extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export const Wrapper = ({
  children,
  className,
  ...rest
}: IWrapper): JSX.Element => {
  return (
    <div className={`p-1 ${className}`} {...rest}>
      {children}
    </div>
  );
};
