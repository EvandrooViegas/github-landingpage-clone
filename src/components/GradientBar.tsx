import { motion } from "framer-motion"
import ShadowIcon from './ShadowIcon'
import { useRef, useEffect } from "react"
interface IProps {
    color?: string,
    icon?: JSX.Element,
    animateWhen: boolean,
    children?: JSX.Element
}
export default function GradientBar({ color = "red, blue", icon, animateWhen, children}: IProps) {
  const elToAnimate = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if(animateWhen) elToAnimate.current?.classList.add("animation-resize-height") 
    else elToAnimate.current?.classList.remove("animation-resize-height") 
  }, [animateWhen])
  return (
    <div className='relative b flex flex-col items-center gap-4 min-h-[300px] h-full'>
        {icon && (
          <ShadowIcon>
              {icon}
          </ShadowIcon>
        )}
   
        <div className="min-h-[300px] h-full">
          <div 
            ref={elToAnimate}
            style={{ background: `linear-gradient(${color})`}}
            className='w-[3px] min-h-full bg-red-700'
          >
            
          </div>
        </div>
        {children}
          
    </div>
  )    
}
