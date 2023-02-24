import React from 'react'
import { motion } from "framer-motion"
export default function Hero() {
  return (
    <div>
      <motion.img 
      animate={{
        y: [6, -6]
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: 0.6,
        duration: 4
        
      }}
      src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
      className='absolute w-[25vw] top-20 right-8 animate-orbit z-10'
      />
    </div>
  )
}
