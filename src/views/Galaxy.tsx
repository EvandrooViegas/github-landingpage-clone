import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Button } from "../components/sticthes/Button";
import globeImg from "../assets/globe.png"
import astrocatImg from "../assets/astrocat.png"
export default function Galaxy() {
  return (
    <div className="footer-galaxy flex flex-col items-center gap-8 mt-[15rem]">
      <h5 className="md:text-7xl text-3xl text-center font-bold">
        <p>The place for anyone from </p>
        <p>anywhere to build anything</p>
      </h5>
      <p className="text-center w-2/3 text-neutral-400">Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the world’s largest developer platform to build the innovations that empower humanity. Let’s build from here.</p>
      <div className="flex gap-4 font-bold text-xl flex-col md:flex-row w-[90%] md:w-full justify-center">
          <Button decoration="whiteBg" className='flex justify-center items-center gap-1 px-12 py-4'>
              <span>Sign up for Github</span>
              <span><MdOutlineKeyboardArrowRight /></span>
          </Button>
          <Button decoration="outline" className='flex justify-center items-center gap-1 border-neutral-600 px-12 py-4 truncate'>
              <p>Start a free enterprise trial</p>
              <MdOutlineKeyboardArrowRight />
          </Button>
      </div>
      <div className="relative w-full md:h-fit min-h-[600px] overflow-x-hidden md:overflow-x-visible">
        <img src={globeImg} className="scale-[3] md:scale-[2] mt-16" />
        <img src={astrocatImg} className="hidden md:flex absolute md:-translate-y-[140px] -translate-y-[90px] center-h md:w-[20rem] w-[10rem]" />
      </div>
    </div>
  )
}
