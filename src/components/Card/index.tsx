import { ReactNode } from 'react';

interface ICard {
  children: ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
}

export const Card = ({
  children,
  className,
  title,
  titleClassName,
}: ICard): JSX.Element => {
  return (
    <div
      className={`mx-auto bg-white rounded-md shadow-sm border-gray-200 border-2 ${className}`}
    >
      {title && (
        <div className={`border p-2 flex ${titleClassName}`}>
          <h1 className='text-xl'>{title}</h1>
        </div>
      )}
      <div className='p-4 w-full'>{children}</div>
    </div>
  );
};
