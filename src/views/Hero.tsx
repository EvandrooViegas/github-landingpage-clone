import { BsCode } from "react-icons/bs"
import { HiArrowSmRight } from "react-icons/hi"
import GradientBar from "../components/GradientBar"
import ShadowIcon from "../components/ShadowIcon"
import { RxBackpack } from "react-icons/rx"
import { Button } from "../components/sticthes/Button"

import stripeIcon from "../assets/stripe.svg"
import pinterestIcon from "../assets/pinterest.svg"
import kpmgIcon from "../assets/kpmg.svg"
import mercedesIcon from "../assets/mercedes.svg"
import pgIcon from "../assets/pg.svg"
import telusIcon from "../assets/telus.svg"

export default function Hero() {

    const orgImgs = [stripeIcon, pinterestIcon, kpmgIcon, mercedesIcon, pgIcon, telusIcon]
  return (
    <>
            <img 
            className="absolute md:left-[45px] w-[21rem] md:w-[25rem]"
                src='https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg' 
            />
            <div className="md:h-[25rem] "></div>
            <div className="flex flex-col gap-5 mt-80">
                <h4 className="text-5xl md:text-8xl font-semibold">Let{"'"}s build from here</h4>
                <p className="text-xl md:mb-4 md:text-4xl md:w-[75%] text-gray-400">Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.</p>
            </div>
           
            <div className="flex justify-center">
                <ShadowIcon><BsCode size={25} /></ShadowIcon>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                <div className="flex">
                    <input className="p-3 w-[20vw] flex-1 rounded-md rounded-r-none outline-none text-black" placeholder="Email address" />
                    <button className="p-3 rounded-r-md font-semibold bg-gradient-to-b from-indigo-600 to-indigo-500 bottom-shadow">
                        Sign up for Gitub
                    </button>
                </div>
                <div className="w-full md:w-[1.3px] py-[0.5px] md:py-full bg-neutral-600"></div>
                <Button decoration="purpleOutline" rounded="md" className="px-4 py-2 flex items-center gap-4 group">Start a free entrepise trial <HiArrowSmRight className="transition-all group-hover:translate-x-1" /></Button>
            
            </div>
   
     
            <div className="mr-auto  w-full">
                <GradientBar animateWhen={true} color="#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364" />
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-neutral-400">
                    Trusted by the world{"'"}s leading organizations ↘︎
                </p>
                <div className="grid grid-cols-2 w-[70%] mx-auto my-4 gap-8 md:w-fit md:flex md:justify-start md:gap-14 md:flex-wrap">
                    {orgImgs.map(img => (
                        <img
                        src={img} 
                        />
                    ))}
                </div>
            </div>
            
    
       </>
 
  )
}
