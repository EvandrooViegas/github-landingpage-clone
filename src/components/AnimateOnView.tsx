
import  { useRef, useState } from "react"
import { AnimationControls, motion, TargetAndTransition, VariantLabels } from "framer-motion"
import { useObserver } from "../hooks"

type Animate = boolean | AnimationControls | TargetAndTransition | VariantLabels 
interface IProps {
    children: JSX.Element,
    animate?:  Animate
    beforeAnimate?: Animate
}

const defaultAnimate:Animate  = {
    scale: [0.95, 1],
    opacity: [0, 1],
    transition: {
        duration: 0.4
    }
}

const defaultBeforeAnimate:Animate = {
    
    opacity: 0
}

export default function AnimateOnView({ 
    children,
    animate = defaultAnimate,
    beforeAnimate = defaultBeforeAnimate
}:IProps ) {
  const elementToAnimateId = useRef(`element-target-${Math.random()}`)
  const [isAniamte, setIsAnimate] = useState(false)
  useObserver({
    target: elementToAnimateId.current,
    onObserve() {
        setIsAnimate(true)
    },
    onUnObserve() {
        setIsAnimate(false)
    },
  })
  return (
    <motion.div id={elementToAnimateId.current} animate={isAniamte ? animate : beforeAnimate}>
        { children }
    </motion.div>
  )
}
