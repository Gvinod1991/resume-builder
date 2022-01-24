import { ReactChild, ReactChildren, HTMLAttributes } from 'react';

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactChild | ReactChildren;
}

export const Wrapper = ({
  children,
  className,
  ...rest
}: WrapperProps): JSX.Element => {
  return (
    <div className={`p-1 ${className}`} {...rest}>
      {children}
    </div>
  );
};
