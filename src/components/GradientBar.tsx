import { AnimationControls, motion, TargetAndTransition, VariantLabels } from "framer-motion"
import ShadowIcon from './ShadowIcon'
import { useRef } from "react"
interface IProps {
    color?: string,
    icon?: JSX.Element,
    animateWhen?: boolean,
    children?: JSX.Element,
    animate?: AnimationControls | TargetAndTransition | VariantLabels 
    beforeAnimate?:  AnimationControls | TargetAndTransition | VariantLabels,
    iconColor?: string
}
export default function GradientBar({ 
  color = "red, blue",
  icon,  
  animateWhen: isAnimate, 
  children, animate = {}, 
  beforeAnimate = {}, 
  iconColor = "red" 
}: IProps) {
  const elToAnimate = useRef<HTMLDivElement | null>(null)
  return (
    <div className='relative b flex flex-col items-center gap-4 min-h-[300px] h-full'>
        {icon && (
          <ShadowIcon color={iconColor}>
              {icon}
          </ShadowIcon>
        )}
   
        <div className="min-h-[300px] h-full">
          <motion.div 
            animate={isAnimate === true && typeof animate === "object"  ? {
              height: "100%",
              ...animate
            } : typeof beforeAnimate === "object" ? {
              height: isAnimate === undefined ? "100%" : 0,
              ...beforeAnimate
            } : { height: isAnimate === undefined ? "100%" : 0 }}
            ref={elToAnimate}
            style={{ background: `linear-gradient(${color})`}}
            className='w-[3px] h-full'
          >
            
          </motion.div>
        </div>
        {children}
          
    </div>
  )    
}
