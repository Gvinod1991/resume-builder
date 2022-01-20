import { InputHTMLAttributes } from 'react';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string,
  name?: string
}

export const Input = ({ inputLabel, name, ...rest }: inputProps) => {
  return <div className="flex flex-col p-1">
    <label>{inputLabel}</label>
    <input
      type="text"
      className="w-full rounded-md shadow-sm bg-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500"
      {...rest}
    />
  </div>
}