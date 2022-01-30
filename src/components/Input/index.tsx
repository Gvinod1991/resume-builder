import { InputHTMLAttributes } from 'react';

interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string;
  name?: string;
  value?: string;
  className?: string;
}

export const Input = ({
  inputLabel,
  name,
  className,
  value,
  ...rest
}: ITextInput): JSX.Element => {
  return (
    <div className='flex flex-col p-1'>
      <label>{inputLabel}</label>
      <input
        type='text'
        name={name}
        className={`w-full rounded-md shadow-sm bg-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 ${className}`}
        value={value ? value : ''}
        {...rest}
      />
    </div>
  );
};
