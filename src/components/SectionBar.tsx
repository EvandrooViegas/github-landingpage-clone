import { ISections } from '../context/CurrentSection'
import { useCurrentSection } from '../hooks'
import { Button } from './sticthes/Button'
import { MdClose, MdKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { useState } from 'react'
import { motion } from "framer-motion"
export default function SectionBar() {
    const { currentSection } = useCurrentSection()!
    const [isNavLinksListOpen, setIsNavLinksListOpen] = useState(false)
    function toggleIsNavLinksOpen() {
        setIsNavLinksListOpen(!isNavLinksListOpen)
    }
  return (
    
        <motion.div className='flex items-center justify-between p-6 fixed top-0 left-0 right-0  min-h-[70px] bg-[#0d1117]  z-20 shadow-lg shadow-[black]' initial={{
            opacity: 0
        }} animate={{
            opacity: 1
        }} exit={{
            opacity: 0
        }}>
            {/* MD + */}
            <ul className='hidden md:flex items-center min-h-full gap-7 text-md  font-semibold'>
                <SectionBarLink text='Productivity' link="productivity" />
                <SectionBarLink text='Collaboration' link='collaboration' />
                <SectionBarLink text='Security' link="security" />
            </ul>
            <div className='hidden md:flex gap-3 font-[700]'>
                <Button decoration="outline" className='flex items-center gap-1 px-4 py-2.5  border-neutral-600'>
                    <span>Start a free enterprise trial</span>
                    <span><MdOutlineKeyboardArrowRight /></span>
                </Button>
                <Button decoration="whiteBg" className=' flex items-center gap-1 px-4 py-2.5'>
                    <span>Sign up for Github</span>
                    <span><MdOutlineKeyboardArrowRight /></span>
                </Button>
            </div>
            {/* SM + */}
            <div className='w-full px-1 flex flex-col md:hidden' onClick={toggleIsNavLinksOpen}>
                <div className='flex items-center justify-between'>
                    <span className="capitalize">{currentSection}</span>
                    <span>
                    <MdKeyboardArrowDown size={20} />
                    </span>
                </div>
                
                {isNavLinksListOpen && (
                    <motion.div 
                        animate={{
                            opacity: [0.5, 1]
                        }}
                        className='fixed p-4 top-0 right-0 left-0 bg-[#0d1117] flex flex-col gap-7 text-md font-semibold'
                    >
                        
                        <ul className='flex flex-col gap-6 font-normal'>
                            <div className='flex justify-between'>
                                <SectionBarLink text='Productivity' link="productivity" />
                                <button className='mr-3' onClick={toggleIsNavLinksOpen}><MdClose size={20}color="white" /></button>
                            </div>
                            <SectionBarLink text='Collaboration' link='collaboration' />
                            <SectionBarLink text='Security' link="security" />
                        </ul>
                        <div className='flex flex-wrap gap-3 font-[700] items-center mx-auto'>
                            <Button decoration="outline" className='w-full flex justify-center items-center gap-1 px-4 py-2.5  border-neutral-600'>
                                <span>Start a free enterprise trial</span>
                                <span><MdOutlineKeyboardArrowRight /></span>
                            </Button>
                            <Button decoration="whiteBg" className='w-full flex justify-center items-center gap-1 px-4 py-2.5'>
                                <span>Sign up for Github</span>
                                <span><MdOutlineKeyboardArrowRight /></span>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
   
  )
}

interface ISectionBarLink {
    text: string,
    link: ISections
}
function SectionBarLink({ text, link }: ISectionBarLink) {
    const { currentSection } = useCurrentSection()!
    const isActive = currentSection === link
    return (
        <>
            <li className='hidden md:flex'>
                <a href={link} className={isActive ? "active-section" : "unactive-section"}>
                    {text}
                </a>
            </li>
            <li className='flex md:hidden'>
                <a href={link} className={`text-xl ${isActive ? "text-blue-400" : ""}`}>
                    {text}
                </a>
            </li>
        </>
    )
}