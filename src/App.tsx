import { motion } from "framer-motion"
import { Hero, Productivity } from "./views/index";
import { Navbar } from "./components/index";
import { useCurrentSection, useObserver } from "./hooks";
import { ISections } from "./context/CurrentSection";
import SectionBar from "./components/SectionBar";

export default function App() {
  const currentSectionTarget:ISections = "home"
  const { updateCurrentSection, currentSection } = useCurrentSection()!
  const showSectionBar = currentSection && currentSection != "home"  
  useObserver({ 
    target: currentSectionTarget, 
    onObserve: () => {
      updateCurrentSection("home")
    }})
  return (

      <main className="space-bg">
        <Navbar />
        {showSectionBar && <SectionBar />}
        <FloatingImage />
        <div id={currentSectionTarget}></div>
        <main className="md:ml-4 md:mt-14 m-4 grid grid-cols-[1fr_14fr] gap-y-[1rem] gap-x-4 md:gap-x-0 justify-center">
          <Hero />
          <Productivity />
        </main>
      </main>

  )
}

function FloatingImage() {
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