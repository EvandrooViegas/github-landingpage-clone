interface IProps {
    color: string
}
export default function DYK({ color }:IProps) {
    return (
        <div 
        className={`border-[1px] text-sm px-4 py-1 rounded-full w-fit`} 
        style={{
            color: color,
            borderColor: color
        }}
        > 
            Did you know?
        </div>
    )
}