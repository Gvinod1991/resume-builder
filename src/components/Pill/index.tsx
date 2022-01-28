interface IPill {
  title: string;
}
export const Pill = ({ title }: IPill): JSX.Element => {
  return (
    <div className='border-indigo-500 border shadow-lg rounded-lg text-gray-800 p-2'>
      {title}
    </div>
  );
};
