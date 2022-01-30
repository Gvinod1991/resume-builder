import React, { ReactNode } from 'react';

interface ITypography {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
  className?: string;
}

export const Typography = ({
  variant,
  children,
  className,
}: ITypography): JSX.Element => {
  return React.createElement(variant, { className }, children);
};
