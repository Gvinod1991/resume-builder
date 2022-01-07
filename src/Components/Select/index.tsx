interface selectProps {
  label: string,
  handleChange: () => void,
  options: Array<any>,
  optionKey?: string,
  optionValue?: string
}

interface optionType {
  optionKey: string,
  optionValue: string
}

export const Select = ({ label, handleChange, options }: selectProps) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <select
        className="mt-1 block w-full rounded-md bg-gray-100 focus:border-indigo-600 border-2 focus:bg-white focus:ring-0"
        placeholder={label}
        onChange={handleChange}>
        {options.map((option: optionType) => (
          <option value={option.optionKey}>{option.optionValue}</option>
        ))}
      </select>
    </div>
  )
}