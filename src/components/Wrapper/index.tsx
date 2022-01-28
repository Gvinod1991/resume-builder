import { ReactChild, ReactChildren, HTMLAttributes } from 'react';

interface IWrapper extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactChild | ReactChildren;
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
