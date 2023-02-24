import {  useState } from 'react'
import { motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io"

interface IProps {
    text: string,
    dropDown?: JSX.Element,
}
export default function NavbarLink({ text, dropDown }:IProps) {
    const [showDropDown, setShowDropDown] = useState<boolean>(false)

  
    function handleShowDropDown() {
        setShowDropDown(true)
    }
    function handleHideDropDown() {
        setShowDropDown(false)
    }
    function toggleShowDropDown() {
        setShowDropDown(!showDropDown)
    }
  return (
    <>
        {/*LG*/}
        <li 
            className='hidden lg:block relative cursor-pointer hover:text-neutral-300 lg:w-fit md:w-full w-full' 
            onMouseOver={handleShowDropDown}
            onMouseLeave={handleHideDropDown}

        >
            <div className='group flex items-center justify-between  gap-1'>
                <span className='font-semibold text-xl lg:font-normal lg:text-sm'>{text}</span>
                {dropDown && (
                    <span className='transition-all text-neutral-400 group-hover:translate-y-1'>
                        <IoIosArrowDown />
                    </span>
                )}
            </div>
            {showDropDown && dropDown && (
                <motion.div 
                className='absolute top-7' 
                animate={{
                    y: [-6, 0],
                    opacity: [0, 1]
                }}>
                    {dropDown}
                </motion.div>
            )}
        </li>

        {/*SM*/}
        <li 
            className='relative cursor-pointer hover:text-neutral-600 lg:hidden w-full' 
            onClick={toggleShowDropDown}
        >
            <div className='group flex items-center justify-between  gap-1'>
                <span className='font-semibold text-xl lg:font-normal lg:text-sm'>{text}</span>
                {dropDown && (
                    <span className='transition-all text-neutral-400 group-hover:translate-y-1'>
                        <IoIosArrowDown />
                    </span>
                )}
            </div>
            {showDropDown && dropDown && (
                <motion.div 
             
                animate={{
                    y: [-6, 0],
                    opacity: [0, 1]
                }}>
                    {dropDown}
                </motion.div>
            )}
        </li>
    </>
  )
}
