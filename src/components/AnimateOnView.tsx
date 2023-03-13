
import  { useRef, useState, HTMLAttributes } from "react"
import { AnimationControls, motion, TargetAndTransition } from "framer-motion"
import { useObserver } from "../hooks"


type Animate =  AnimationControls | TargetAndTransition  
type IProps =  HTMLAttributes<HTMLDivElement> & Animate & {
    children: JSX.Element,
    animate?:  Animate
    beforeAnimate?: Animate,
    onView?: () => void

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
    beforeAnimate = defaultBeforeAnimate,
    onView,
    ...props
}:IProps ) {
  const elementToAnimateId = useRef(`element-target-${Math.random()}`)
  const [isAniamte, setIsAnimate] = useState(false)
  useObserver({
    target: elementToAnimateId.current,
    onObserve() {
        setIsAnimate(true)
        onView?.()
    },
    onUnObserve() {
        setIsAnimate(false)
    },
  })
  return (
    <motion.div {...props} id={elementToAnimateId.current} animate={isAniamte ? animate : beforeAnimate}>
        { children }
    </motion.div>
  )
}
