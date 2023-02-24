import Logo from './Logo'
import { AiOutlineMenu } from "react-icons/ai"
import NavbarLink from './NavbarLink'
import OpenSourceDropDown from './NavLinkDropDown/OpenSourceDropDown'
import ProductDropDown from './NavLinkDropDown/ProductDropDown'
import SoluctionsDropDown from './NavLinkDropDown/SoluctionsDropDown'
import SearchInput from './SearchInput'
import { Button } from './sticthes/Button'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false)
  function toggleOpenNavbar() {
    setOpenNavbar(!openNavbar)
  }
  return (
    <div>
        {/* SM */}
        <div className='lg:hidden flex justify-between p-4 items-center'>
          <Button decoration="outline">Sign Up</Button>
          <Logo />
          <button className='text-2xl' onClick={toggleOpenNavbar}>
            { openNavbar ? <IoCloseOutline size={30} /> : <AiOutlineMenu /> }
          </button>
          {openNavbar && <SmNavbar /> }
    

        </div>

        {/* LG */}
        <div className='hidden lg:flex md:hidden items-center justify-between p-4'>
          <div className='flex items-center gap-4'>
              <Logo />
              <NavLinks />
          </div>
          <div className='flex gap-4 items-center'>
              <SearchInput />
              <Button>Sign in</Button>
              <Button decoration="outline">Sign up</Button>
          </div>
        </div>
    </div>
  )
}

function SmNavbar() {
  return (
    <motion.div 
    animate={{
      y: [-10, 0],
      opacity: [0, 1]
    }}
    className='text-black flex justify-center md:justify-end md:pr-6 items-center absolute left-0 right-0 bottom-0 top-14 backdrop-blur-md z-20'
    >
      <div className='flex flex-col justify-between bg-white w-[90vw] rounded-md p-7 md:w-[55vw] h-[90vh]'>
        <div className='overflow-y-auto overflow-x-hidden'> 
          <NavLinks />
        </div>
        
        <div className='flex flex-col gap-3 w-[90%] mx-auto my-4'>
          <input type="text" className='w-full border-[1px] border-neutral-300 p-2 rounded-lg outline-none
          placeholder:px-3
          ' placeholder='Search Github' />
          <Button decoration="grayBg" className='py-3 font-semibold'>Sign In</Button>
        </div>
      </div>
    </motion.div>
  )
}


function NavLinks() {
  return (
    <ul className='flex flex-col lg:flex-row items-center gap-5'>
        <NavbarLink text='Product' dropDown={<ProductDropDown />} />
        <NavbarLink text='Solucions' dropDown={<SoluctionsDropDown />} />
        <NavbarLink text='Open Source' dropDown={<OpenSourceDropDown />}/>
        <NavbarLink text='Pricing' />
    </ul>
  )
}