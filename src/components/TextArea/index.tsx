interface ITextArea {
  textAreaValue: string;
  textAreLabel?: string;
  placeholder?: string;
  rows?: number;
  handleChange: () => void;
}
export const TextArea = ({
  textAreaValue,
  textAreLabel,
  placeholder,
  rows,
  handleChange,
}: ITextArea): JSX.Element => {
  return (
    <div className='flex flex-col p-1'>
      <label>{textAreLabel}</label>
      <textarea
        className='w-full rounded-md shadow-sm bg-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500'
        onChange={handleChange}
        value={textAreaValue}
        placeholder={placeholder}
        rows={rows ? rows : 3}
      />
    </div>
  );
};
