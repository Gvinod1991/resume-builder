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
        className='w-full rounded-md shadow-sm bg-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500'
        onChange={handleChange}
        value={textAreaValue}
      />
    </div>
  )
}