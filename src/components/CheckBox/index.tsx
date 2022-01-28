import { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string;
}

export const CheckBox = ({ inputLabel, ...rest }: IInput): JSX.Element => {
  return (
    <div className='flex flex-row-reverse justify-end p-1'>
      <label className='ml-1'>{inputLabel}</label>
      <input type='checkbox' className='ml-1 mt-1 cursor-pointer' {...rest} />
    </div>
  );
};
