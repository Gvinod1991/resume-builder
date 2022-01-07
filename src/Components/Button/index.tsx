interface ButtonType {
  title: string;
  className?: string;
  onClick?: () => void
}

export const Button = ({ title, onClick, className }: ButtonType) => {
  return (
    <button className={`${className} bg-indigo-700 text-white p-2 rounded-md border-0 hover:bg-indigo-800 focus:outline-none`} onClick={onClick}>{title}</button>
  )
}