
interface inputProps {
  inputLabel: string,
  value?: string,
  readonly?: boolean,
  disabled?: boolean,
  handleChange: () => void
}

export const Input = ({ inputLabel, value, handleChange, readonly, disabled }: inputProps) => {
  return <div className="flex flex-col p-1">
    <label>{inputLabel}</label>
    <input
      type="text"
      readOnly={readonly}
      value={value || ""}
      disabled={disabled}
      className="w-full rounded-md shadow-sm bg-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500"
      placeholder={inputLabel}
      onChange={handleChange}
    />
  </div>
}