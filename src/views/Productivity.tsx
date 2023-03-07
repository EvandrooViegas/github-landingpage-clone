
/* HOOKS */
import  {useObserver }  from "../hooks/index"
import { useState } from "react"
import  useCurrentSection from "../hooks/useCurrentSection"
/* ICONS */
import { RxBackpack } from "react-icons/rx"
import { BiLockAlt } from "react-icons/bi"
import { TfiReload } from "react-icons/tfi"
import { TbPlus } from "react-icons/tb"
import { FiMenu } from "react-icons/fi"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { BsArrowRightShort, BsGithub } from "react-icons/bs"
import { MdNotificationsNone, MdOutlineKeyboardArrowRight } from "react-icons/md"
/* COMPONENTS */
import GradientBar from '../components/GradientBar'
import { ISections } from '../context/CurrentSection'
import { motion } from "framer-motion"
import { default as CodeIDE } from '@uiw/react-textarea-code-editor';
import DYK from "../components/DYK"
/* ASSETS */
import globeImage from "../assets/globe.webp"
import portsImg from "../assets/illo-ports.png"
import menuImg from "../assets/illo-context-menu.png"
import gitBrancProductImg from "../assets/git-branch-productivity.svg"
import MovingCard from "../components/MovingCard"

export default function Productivity() {
  const currentSectionTarget:ISections = "productivity"
  const { updateCurrentSection, currentSection } = useCurrentSection()!
  const [isAnimateImageParagraph, setIsAnimateImageParagraph] = useState<boolean>(false)
  useObserver({ 
    target: currentSectionTarget, 
    onObserve: () => {
      updateCurrentSection(currentSectionTarget)
  }})
  useObserver({
    target: "target-image-paragraph",
    onObserve: () => {
      setIsAnimateImageParagraph(true)
    },
    onUnObserve: () => {
      setIsAnimateImageParagraph(false)
    }
  })
  return (
    <>
      {/* ROW 1 */}
      <div className="mr-auto  w-full">
        <GradientBar
          icon={<RxBackpack />}
          color="#56d364, #2ea043, #0d1117"
          animateWhen={currentSection === "productivity"}
        />
      </div>
      {currentSection == "productivity" && (
        <div>
          <motion.h4
            animate={{
              x: [-20, 0],
              opacity: [0, 1],
              transition: { duration: 0.4 },
            }}
            className="text-2xl my-auto font-semibold"
          >
            Productivity
          </motion.h4>
          <motion.p
            animate={{
              x: [-30, 0],
              opacity: [0, 1],
              transition: { duration: 0.2 },
            }}
            className="text-3xl md:text-5xl font-semibold w-3/4 mt-4"
          >
            <span className="text-[#75c57e]">
              Accelerate high-quality software development.
            </span>{" "}
            Our platform drives innovation with tools that boost developer
            velocity.
          </motion.p>
        </div>
      )}
      {/* ROW 2 */}
      <div className="col-span-2" id={currentSectionTarget}>
        <CodeEditor />
      </div>

      {/* ROW 3 */}
      <div className="mr-auto w-full h-full ">
        <GradientBar
          color="#0d1117, #2ea043, #2ea043, #0d1117"
          animateWhen={currentSection === "productivity"}
        >

          <img
          className="absolute -right-10"
          src={gitBrancProductImg}
          />
        </GradientBar>
      </div>
      <div className="ml-20 flex flex-col-reverse md:grid md:grid-cols-[1fr_1fr] gap-4  justify-between p-7">
        <motion.div
          animate={
            isAnimateImageParagraph
              ? {
                  opacity: [0, 1],
                  x: [20, 0],
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  },
                }
              : { opacity: 0 }
          }
        >
          <p id="target-terminal" className="text-2xl font-semibold">
            <span className="text-green-400">GitHub Codespaces</span> offers a
            complete dev environment in seconds, so you can code, build, test,
            and open pull requests from any repo anywhere.
          </p>
          <button className="group flex items-center text-md md:text-xl font-semibold mt-2 underline-animation">
            <span>Check out Github Codespaces</span>
            <button className="translate-y-0.5 transition-all group-hover:translate-x-2">
              <MdOutlineKeyboardArrowRight />
            </button>
          </button>
        </motion.div>
        <motion.div className="relative md:mr-40">
          <motion.img 
            animate={
              isAnimateImageParagraph ? {
                opacity: [0, 1],
                x: [10, 0],
                transition: {
                  delay: 0.2
                }
              } : {
                opacity: 0
              }
            } 
            src={portsImg} 
            className="hidden md:flex w-[55rem] rounded-lg" 
        />
          <motion.img
            animate={
              isAnimateImageParagraph ? {
                opacity: [0, 1],
                x: [-10, 0],
                transition: {
                  delay: 0.5
                }
              } : {
                opacity: 0
              }
            }
            src={menuImg}
            className="absolute bottom-1/2 left-1/2 -translate-x-1/2 md:left-1/2 md:translate-x-0 rounded-lg"
          />
        </motion.div>
      
        <div className="flex items-center col-span-2  h-full  gap-1 mt-20 w-full">
        
          <div className="flex  flex-col" id="target-image-paragraph">  
            <DYK color="rgb(74 222 128)" />
            <h4 className="text-5xl font-semibold text-green-500">22% increase</h4>
            <p className=" text-xl font-semibold">
              <div>
              in developer productivity 
              </div>
              <div>
              after three years with GitHub1
              </div>
            </p>
          </div>
        </div>
        
      </div>
      {/* ROW 4 */}
      <div className="col-span-2">
            <MovingCard color="red">
              <div>
                Hello
              </div>
            </MovingCard>
      </div>
      
     
    </>
  );
}

function CodeEditor() {

  return (
  
      <div className='grid grid-cols-[0.5fr_4fr_3fr] grid-rows-[1fr_10fr] border-[1px] border-neutral-700 rounded-md h-fit'>
        <CodeEditorTopBar />
        <CodeSideBar />
        <CECodeIDE />
        <CodeEditorCodePreview />
      </div>

  )
}

function CodeSideBar() {
  return (
    <div className='hidden md:flex flex-col justify-start items-center p-3 bg-[#21262d] border-r-[1px] border-neutral-700'>
      <FiMenu size={25} />
    </div>
  )
}

function CodeEditorTopBar() {
  return (
      <div className='col-span-3 flex justify-between items-center p-3 border-b-[1px] border-neutral-700 bg-[#21262d]'>
        <div className='hidden md:flex gap-2 items-center'>
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
        <div className="bg-[#0d1117] max-w-full border-[1px] border-neutral-700 rounded-lg px-2 py-1 flex justify-between items-center gap-14">
          <button><BiLockAlt /></button>
          <span className="truncate">mona-github-github-g59jpq2w5w7.github.dev</span>
          <button><TfiReload /></button>
        </div>
        <div className="hidden md:flex">
          <TbPlus />
        </div>
      </div>
  )
}

function CodeEditorCodePreview() {
  return (
    <div className='hidden md:grid grid-rows-[1fr_10fr]'>
        <div className='text-xl flex justify-between items-center p-3 bg-[#21262d]'>
          <FiMenu />
          <BsGithub />
          <MdNotificationsNone />
         
        </div>
        <div className="h-full w-full">
          <img
          className="object-cover h-full"
          src={globeImage}
          />
        </div>


    </div>
  )
}

function CECodeIDE() {
  const tabs = ["index.html", "script.js", "package.json"]
  const code = `<div class="position-absolute width-full color-bg-default" style="bottom: -4rem;">
  <div class="container-xl p-responsive">
    <div class="d-flex flex-justify-center flex-lg-justify-end color-bg-default">
      <div class="col-8 col-sm-7 col-md-6 col-lg-5 position-relative z-2 right-lg-n12 events-none">
        <picture>
          <source srcset="astro-mona.webp" type="image/webp">
          <img src="astro-mona.svg" width="960" height="967" class="home-astro-mona width-full position-absolute bottom-0 height-auto" alt="Mona looking at GitHub activity across the globe">
        </picture>
      </div>
    </div>
  </div>
</div>`
  	return (
      <div className="col-span-3 md:col-span-1 bg-[#21262d] border-r-[1px] border-neutral-700">
        <ul className="ml-3 flex pt-8">
          {tabs.map((tab, idx) => (
            <li className={idx === 0 ? "bg-[#0d1117] px-3 py-1.5 rounded-t-lg" : "px-3 py-1.5 text-neutral-400"}>{tab}</li>
          ))}
        </ul>
        <CodeIDE
          value={code}
          language="html"
          data-color-mode="dark"
          padding={15}
          style={{
            fontSize: 15,
            backgroundColor: "#0d1117",
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
        />
        <CETerminal />
      </div>
    )
}

function CETerminal() {
  
  const handleObserve = () => {
    setIsAnimateList(true)
  }
  const handleUnObserve = () => {
    setIsAnimateList(false)
  }
  useObserver({
    target: "target-terminal",
    onObserve: handleObserve,
    onUnObserve: handleUnObserve
  })
  const logs = [
    { currentTime: "09:43:36", status: "Starting", message:  'watch-extension:vscode-api-tests' },
    { currentTime: "09:43:36", status: "Finished", message:  'clean-extension:typescript-language-features', after: "2 s" },
    { currentTime: "09:43:36", status: "Starting", message:  'watch-extension:typescript-language-features' },
    { currentTime: "09:43:36", status: "Finished", message:  'clean-extension:php-language-features', after: "384 ms" },
    { currentTime: "09:43:40", status: "Finished", message:  'clean-extension:html-language-features-server', after: "" },
    { currentTime: "09:43:40", status: "Starting", message:  'watch-extension:html-language-features-server' },
    { currentTime: "09:43:43", status: "Finished", message:  'clean-client', after: "7.33 s" },
    { currentTime: "09:43:43", status: "Starting", message:  'watch-client' },
  ]
  const [isAnimateList, setIsAnimateList] = useState<boolean>(false)
  const tabs = ["Terminal", "Output", "Problems", "Debug Console"]

  return (
    <div className="p-4 flex flex-col gap-4">
      <ul className="flex text-[15px] gap-8">
        {tabs.map((tab, idx) => (
          <li className={`truncate ${idx === 0 ? 'text-white' : 'text-neutral-400'}`}>{tab}</li>
        ))}
      </ul>
      {<div className="flex flex-col">
          {logs.map(({ currentTime, status, message, after }, idx) => (
              <motion.div className="grid grid-cols-[0.7fr_0.7fr_3fr]" 
              animate={isAnimateList ? {
                y: [idx * 3 + 9, 0],
                opacity: [0, 1],
                transition: {
                  duration: 0 * idx + 0.4,
                  delay: 0.5,
                  ease: "linear"
                }
              } : { opacity: 0 }}>
                <span className="text-gray-500">{`[${currentTime}]`}</span>
                <span className="text-neutral-400">{status}</span>
                <div className="flex truncate gap-3">
                  <span className=" text-blue-500">{message}</span>
                  <span className="text-indigo-500">
                    <span className="text-neutral-500">after </span>
                    {after && <span>{after}</span>}
              
                  </span>
                </div>
              </motion.div>
          ))} 
      </div>}
    </div>
  )
}