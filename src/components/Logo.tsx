//@ts-ignore
import { BsGithub } from "react-icons/bs"
interface IProps {
    size?: number
}
export default function Logo({ size = 32 }:IProps) {
  return (
    <BsGithub 
    size={size}
    />

  )
}
