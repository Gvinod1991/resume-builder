import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  leftIcon?: ReactNode,
  rightIcon?: ReactNode
}

export const Button = ({ title, onClick, className, leftIcon, rightIcon }: ButtonType) => {
  return (
    <button className={`${className} bg-indigo-700 text-white p-2 rounded-md border-0 hover:bg-indigo-800 focus:outline-none`} onClick={onClick}>
      <span className="inline-block align-sub">
        {leftIcon}
      </span>
      {title}
      <span className="inline-block align-sub">
        {rightIcon}
      </span>
    </button>
  )
}