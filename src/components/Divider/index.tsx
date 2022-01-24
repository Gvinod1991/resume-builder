interface DividerProps {
  className?: string;
}
export const Divider = ({ className }: DividerProps): JSX.Element => {
  return <div className={`border border-gray-100 ${className}`}></div>;
};
