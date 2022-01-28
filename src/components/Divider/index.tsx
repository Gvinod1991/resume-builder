interface IDivider {
  className?: string;
}
export const Divider = ({ className }: IDivider): JSX.Element => {
  return <div className={`border border-gray-100 ${className}`}></div>;
};
