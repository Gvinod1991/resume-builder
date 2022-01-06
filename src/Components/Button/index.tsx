interface ButtonType {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonType) => {
  return (
    <button className='bg-indigo-700 text-white p-2 rounded-md border-0 hover:bg-indigo-800 focus:outline-none' onClick={onClick}>{title}</button>
  )
}