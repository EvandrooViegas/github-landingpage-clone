interface IProps {
    direction: "horizontal" | "vertical"
}
export default function Divider({ direction }:IProps) {
  if(direction === "horizontal") {
    return (
        <div className="h-[2px] bg-neutral-200 w-full">

        </div>
    )
  } else {
    return (
        <div className="w-[2px] bg-neutral-200 h-full">

        </div>
    )
  }
}
