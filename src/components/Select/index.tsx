import { SelectHTMLAttributes } from 'react';

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<any>;
  optionKey?: string;
  optionValue?: string;
  selectedValue?: string;
}

interface IOption {
  optionKey: string;
  optionValue: string;
}

export const Select = ({
  label,
  handleChange,
  options,
  selectedValue,
  ...rest
}: ISelect): JSX.Element => {
  return (
    <div className='flex flex-col p-1'>
      <label>{label}</label>
      <select
        className='w-full rounded-md shadow-sm bg-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500'
        placeholder={label}
        onChange={handleChange}
        value={selectedValue}
        {...rest}
      >
        {options.map((option: IOption) => (
          <option key={option.optionKey} value={option.optionKey}>
            {option.optionValue}
          </option>
        ))}
      </select>
    </div>
  );
};
