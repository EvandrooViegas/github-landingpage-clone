import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

interface IProps {
    children: string | JSX.Element
}
export default function HoverBtn({ children }:IProps) {
  return (
    <button className="group w-fit flex items-center text-md md:text-xl font-semibold mt-2 underline-animation">
            <span>{children}</span>
        <button className="translate-y-0.5 transition-all group-hover:translate-x-2">
            <MdOutlineKeyboardArrowRight />
        </button>
    </button>
  )
}
