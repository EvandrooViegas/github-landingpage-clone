import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
//@ts-ignore
import Tilt from "react-tilt"
interface IProps {
    children: JSX.Element,
    color?: string,
    size?: number 
}
export default function MovingCard({ children, color = "green", size = 50 }:IProps) {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [showShadow, setShowShadow] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        cardRef.current?.addEventListener("mousemove", handleMouseMove)
        return () => {
            cardRef.current?.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])
    function handleMouseMove (e:MouseEvent)  {
        const parentElement = e.currentTarget as HTMLElement; // get the parent element
        const { left, top } = parentElement.getBoundingClientRect(); // get parent element's position
        setMousePosition({
          x: e.clientX - left,
          y: e.clientY - top
        });
    }
    return (
        <Tilt className="Tilt overflow-hidden rounded-xl" options={{
            reverse:        false,  // reverse the tilt direction
            max:            6,     // max tilt rotation (degrees)
            perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
            scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
            speed:          300,    // Speed of the enter/exit transition
            transition:     true,   // Set a transition on enter/exit.
            axis:           null,   // What axis should be disabled. Can be X or Y.
            reset:          false,    // If the tilt effect has to be reset on exit.
        }}>
            <div ref={cardRef} className="relative select-none overflow-hidden rounded-lg h-full" onMouseEnter={() => setShowShadow(true)} onMouseLeave={() => setShowShadow(false)}>
                <div className="border-[1px] border-[#30363d] bg-[#161b22]/80 backdrop-blur-3xl min-h-full ">
                    {children}
                </div>
                <AnimatePresence>
                    {showShadow && (
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0}} 
                        drag="x"
                        className=" bg-red-500 rounded-full  -translate-x-1/2 -translate-y-1/2 " 
                        style={{
                            zIndex: -1,
                            width: size + "rem",
                            height: size + "rem",
                            position: "absolute",
                            background: `radial-gradient(${color}, transparent)`,
                            left: mousePosition.x + "px",
                            top: mousePosition.y + "px",

                        }}>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Tilt>
  )
}
