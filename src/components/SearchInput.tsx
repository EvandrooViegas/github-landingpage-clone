import { useState } from "react"

export default function SearchInput() {
    const [isFocused, setIsFocused] = useState(false)
  return (
    <div 
    tabIndex={0}
    onBlur={() => setIsFocused(false)}
    onClick={() => setIsFocused(true)} 
    className={`flex justify-between border-[1px] border-neutral-600 ${isFocused ? 'bg-white' : 'bg-gray-500/30'} p-2 w-[250px] rounded-md`}>
        <input 
            className={`bg-transparent outline-none
            ${isFocused ? 'text-neutral-600' : 'text-white'}
            placeholder:px-3 placeholder:text-sm placeholder:${isFocused ? 'text-neutral-600' : 'text-white'}
            `}
            placeholder="Search GitHub"
        />
        <button className={`text-sm px-2 border-[1px] border-neutral-600 text-neutral-400 flex justify-center items-center rounded-md ${isFocused ? "opacity-0" : "opacity-1"}`}>
            /
        </button>
    </div>
  )
}
