import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDatePickerProps {
  pickerLabel?: string;
}
export const CustomDatePicker = ({
  pickerLabel,
}: CustomDatePickerProps): JSX.Element => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <div className='flex flex-col p-1'>
      <label>{pickerLabel}</label>
      <DatePicker
        className='w-full rounded-md shadow-sm bg-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500'
        selected={startDate}
        onChange={(date: Date): void => setStartDate(date)}
        dateFormat='MM/yyyy'
        showMonthYearPicker
      />
    </div>
  );
};
