interface IProps {
    children: JSX.Element,
    color: string
}
export default function MovingCard({ children, color }:IProps) {
  return (
    <div>{children}</div>
  )
}
