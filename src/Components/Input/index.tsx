
interface inputProps {
  inputLabel: string,
  handleChange: () => void
}

export const Input = ({ inputLabel, handleChange }: inputProps) => {
  return <div className="flex flex-col">
    <label>{inputLabel}</label>
    <input
      type="text"
      className="mt-1 block w-full rounded-md bg-gray-100 focus:border-indigo-600 border-2 focus:bg-white focus:ring-0"
      placeholder={inputLabel}
      onChange={handleChange}
    />
  </div>
}