
interface DividerProps {
  className?: string
}
export const Divider = ({ className }: DividerProps) => {
  return (
    <div className={`border border-gray-100`} ></div>
  )
}