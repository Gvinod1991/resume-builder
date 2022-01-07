import { ReactChild, ReactChildren } from 'react';

interface TextAreaProps {
  textAreaValue: string,
  textAreLabel: string,
  handleChange: () => void
}
export const TextArea = ({ textAreaValue, textAreLabel, handleChange }: TextAreaProps) => {
  return (
    <div className="flex flex-col p-1">
      <label>{textAreLabel}</label>
      <textarea
        className='mt-1 block w-full rounded-md bg-gray-100 focus:border-indigo-600 border-2 focus:bg-white focus:ring-0'
        onChange={handleChange}
        value={textAreaValue}
      />
    </div>
  )
}