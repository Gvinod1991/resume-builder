import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ICustomDatePicker {
  pickerLabel?: string;
  selectedDate: string;
  onDateChange: (date: string) => void;
}
export const CustomDatePicker = ({
  pickerLabel,
  selectedDate,
  onDateChange,
}: ICustomDatePicker): JSX.Element => {
  return (
    <div className='flex flex-col p-1'>
      <label>{pickerLabel}</label>
      <DatePicker
        className='w-full rounded-md shadow-sm bg-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500'
        selected={selectedDate ? new Date(selectedDate) : new Date()}
        onChange={(date: Date): void =>
          onDateChange(new Date(date).toISOString().slice(0, 10))
        }
        dateFormat='MM/yyyy'
        showMonthYearPicker
      />
    </div>
  );
};
