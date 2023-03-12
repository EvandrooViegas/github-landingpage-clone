/* HOOKS */
import { useObserver } from "../hooks/index";
import { useState } from "react";
import useCurrentSection from "../hooks/useCurrentSection";
/* ICONS */
import { RxBackpack } from "react-icons/rx";
import { BiLockAlt } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";
import { TbPlus } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { DiPython } from "react-icons/di";
import { SiJavascript, SiGoland } from "react-icons/si";
/* COMPONENTS */
import GradientBar from "../components/GradientBar";
import { ISections } from "../context/CurrentSection";
import { motion } from "framer-motion";
import { default as CodeIDE } from "@uiw/react-textarea-code-editor";
import DYK from "../components/DYK";
/* ASSETS */
import globeImage from "../assets/globe.webp";
import portsImg from "../assets/illo-ports.png";
import menuImg from "../assets/illo-context-menu.png";
import gitBrancProductImg from "../assets/git-branch-productivity.svg";
import MovingCard from "../components/MovingCard";
import HoverBtn from "../components/HoverBtn";
import useTextTyper from "../hooks/useTextTyper";
import { VscDebugRestart } from "react-icons/vsc";
import workflowsImg from "../assets/workflows.webp";
import moblieImg from "../assets/moblie.webp";
import AnimateOnView from "../components/AnimateOnView";

export default function Productivity() {
  const currentSectionTarget: ISections = "productivity";
  const { updateCurrentSection, currentSection } = useCurrentSection()!;
  const [isAnimateImageParagraph, setIsAnimateImageParagraph] =
    useState<boolean>(false);
  const [isObservingIncreaseText, setIsObservingIncreaseText] = useState(false);
  //target that is going to trigger gradient bar animation
  const increaseTextTarget = "target-code-editor";
  useObserver({
    target: currentSectionTarget,
    onObserve: () => {
      updateCurrentSection(currentSectionTarget);
    },
  });
  useObserver({
    target: "target-image-paragraph",
    onObserve: () => {
      setIsAnimateImageParagraph(true);
    },
    onUnObserve: () => {
      setIsAnimateImageParagraph(false);
    },
  });
  useObserver({
    target: increaseTextTarget,
    onObserve: () => {
      setIsObservingIncreaseText(true);
    },
    onUnObserve: () => {
      setIsObservingIncreaseText(false);
    },
  });

  return (
    <>
      {/* ROW 1 */}
      <div className="mr-auto  w-full">
        <GradientBar
          icon={<RxBackpack />}
          iconColor="#3fb950"
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
      <div className="mr-auto w-full md:h-[150px] ">
        <GradientBar
          color="#0d1117, #2ea043, #2ea043, #2ea043"
          animateWhen={isObservingIncreaseText}
        />
      </div>

      <div className="md:ml-20 flex flex-col-reverse md:grid md:grid-cols-[1fr_1fr] gap-4 justify-between ">
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
            <span className="text-[#7ee787]">GitHub Codespaces</span> offers a
            complete dev environment in seconds, so you can code, build, test,
            and open pull requests from any repo anywhere.
          </p>
          <HoverBtn>Check out Github Codespaces</HoverBtn>
        </motion.div>
        <motion.div className="relative overflow-hidden md:overflow-visible md:mr-40">
          <motion.img
            animate={
               isAnimateImageParagraph
                ? {
                    opacity: [0, 1],
                    x: [10, 0],
                    transition: {
                      delay: 0.2,
                    },
                  }
                : {
                    opacity: 0,
                  }
            }
            src={portsImg}
            className="hidden md:flex w-[55rem] rounded-lg "
          />
          <motion.img
            animate={
              isAnimateImageParagraph
                ? {
                    opacity: [0, 1],
                    x: [-10, 10],
                    transition: {
                      delay: 0.5,
                    },
                  }
                : {
                    opacity: 0,
                  }
            }
            src={menuImg}
            className="w-[20rem] absolute left-1/2 bottom-1/2 rounded-lg"
          />
        </motion.div>
      </div>
      {/* ROW 4 */}
      <motion.div
        className="mr-auto w-full md:h-[450px] gap-0"
        animate={
          isObservingIncreaseText
            ? {
                opacity: [0, 1],
                transition: {
                  delay: 0.3,
                },
              }
            : {
                opacity: 0,
              }
        }
      >
        <GradientBar color="#2ea043, #2ea043, #2ea043, #0d1117">
          <img
            className="hidden md:flex absolute -right-10"
            src={gitBrancProductImg}
          />
        </GradientBar>
      </motion.div>
      <div>
        <motion.div
          className="md:ml-20 h-full flex justify-center flex-col "
          id="target-image-paragraph"
          animate={
            isObservingIncreaseText
              ? {
                  opacity: [0, 1],
                  x: [-15, 0],
                  transition: {
                    delay: 0.7,
                  },
                }
              : {
                  opacity: 0,
                }
          }
        >
          <DYK color="#7ee787" />
          <motion.h4
            className="text-4xl md:text-6xl font-semibold text-[#7ee787]"
            id={increaseTextTarget}
          >
            22% increase
          </motion.h4>
          <p className=" text-xl font-semibold md:mt-0 mt-2">
            <div>in developer productivity</div>
            <div>after three years with GitHub</div>
          </p>
        </motion.div>
      </div>
      {/* ROW 5 */}
      <div className="col-span-2">
        <MovingCard>
          <div className="flex flex-col gap-2 py-10 px-6 md:p-14 md:grid md:grid-cols-2">
            <div className="flex flex-col justify-between gap-12">
              <p className="text-neutral-400 font-semibold text-2xl">
                <span className="text-white md:w-2/3">GitHub Copilot</span>
                is your AI pair programmer that empowers you to complete tasks
                55% faster by turning natural language prompts into coding
                suggestions.
              </p>

              <div className="mb-5 md:mb-0">
                <HoverBtn>Meet Github Copilot</HoverBtn>
              </div>
            </div>
            <div>
              <AnimatedCodeEditor />
            </div>
          </div>
        </MovingCard>
      </div>
      {/* ROW 6 */}
      <div className="col-span-2 grid md:grid-cols-2 gap-x-[1rem] gap-y-4 md:gap-y-0">
        <MovingCard>
          <>
            <div className="flex flex-col justify-between gap-4 py-10 px-6 md:p-14">
              <p className="text-neutral-400 font-semibold text-2xl">
                <span className="text-white md:w-2/3">GitHub Actions </span>
                automates your build, test, and deployment workflow with simple
                and secure CI/CD.
              </p>
              <HoverBtn>Discover GitHub Actions </HoverBtn>
            </div>
            <AnimateOnView>
              <img src={workflowsImg} />
            </AnimateOnView>
          </>
        </MovingCard>

        <MovingCard>
          <>
            <div className="flex flex-col justify-between gap-4 py-10 px-6 md:p-14">
              <p className="text-neutral-400 font-semibold text-2xl">
                <span className="text-white md:w-2/3">GitHub Mobile </span>
                fits your projects in your pocket, so you never miss a beat
                while on the go.
              </p>
              <HoverBtn>Get GitHub Mobile </HoverBtn>
            </div>

            <AnimateOnView>
              <img src={moblieImg} />
            </AnimateOnView>
          </>
        </MovingCard>
      </div>
    </>
  );
}

function AnimatedCodeEditor() {
  const tabs = [
    {
      id: 1,
      name: "draw_scatterplot.py",
      icon: <DiPython />,
      language: "python",
      code: ` 
      import matplotlib.pyplot as plt
      def draw_scatterplot(x_values, y_values):
        plt.scatter(x_values, y_values, s=20)
        plt.title("Scatter Plot")
        plt.xlabel("x values")
        plt.ylabel("y values")
        plt.show()
      
    `,
    },
    {
      id: 2,
      name: "time.js",
      icon: <SiJavascript />,
      language: "javascript",
      code: `
      const seconds = 3600
      const minutes = seconds / 60
      const hours = minutes / 60
      const days = hours / 24
      const weeks = days / 7
      const months = days / 30
      const years = months / 12
    `,
    },
    {
      id: 3,
      name: "memoize.js",
      icon: <SiGoland />,
      language: "go",
      code: `
    package main
      func Memoize(fn func(int) int) func(int) int {
          cache := make(map[int]int)
          return func(n int) int {
              if v, ok := cache[n]; ok {
                  return v
              }
              cache[n] = fn(n)
              return cache[n]
          }
      }
    `,
    },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[1]);
  const [isObservingCodeEditor, setIsObservingCodeEditor] = useState(false);
  type ISelectedTab = typeof selectedTab;
  const [code, resetTyping, isFinished] = useTextTyper({
    string: selectedTab.code,
    time: 10,
    isType: isObservingCodeEditor,
  });
  const updateSelectedTab = (newSelectedTab: ISelectedTab) => {
    setSelectedTab(newSelectedTab);
  };
  const codeEditorTarget = "target-animatedCodeEditor";

  useObserver({
    target: codeEditorTarget,
    onObserve: () => {
      setIsObservingCodeEditor(true);
      resetTyping();
    },
    onUnObserve: () => {
      setIsObservingCodeEditor(false);
    },
  });
  return (
    <div
      className="flex flex-col items-center transition-all"
      id={codeEditorTarget}
    >
      <div className="border-[1px] border-neutral-700 rounded-lg w-full transition-all">
        <ul className="flex items-center pl-2 pt-2 overflow-x-auto">
          {tabs.map((tab) => (
            <li
              onClick={() => updateSelectedTab(tab)}
              className={`flex cursor-pointer rounded-t-lg border-[1px] border-b-0  gap-2 items-center px-5 py-2 ${
                selectedTab.id === tab.id
                  ? "bg-[#0d1117] border-neutral-700"
                  : "text-neutral-400 border-transparent"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
            </li>
          ))}
        </ul>
        <CodeIDE
          value={code}
          language={selectedTab.language}
          className="transition-all"
          style={{
            fontSize: 17,
            backgroundColor: "#0d1117",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </div>
      {isFinished && (
        <button onClick={resetTyping} className="flex items-center gap-2 mt-4">
          <span>
            <VscDebugRestart />
          </span>
          <span>Replay</span>
        </button>
      )}
    </div>
  );
}
function CodeEditor() {
  return (
    <div className="grid grid-cols-[0.5fr_4fr_3fr] grid-rows-[1fr_10fr] border-[1px] bg-[#161b22]  border-neutral-700 rounded-md h-fit">
      <CodeEditorTopBar />
      <CodeSideBar />
      <CECodeIDE />
      <CodeEditorCodePreview />
    </div>
  );
}

function CodeSideBar() {
  return (
    <div className="hidden md:flex flex-col justify-start items-center p-3 border-r-[1px] border-neutral-700">
      <FiMenu size={25} />
    </div>
  );
}

function CodeEditorTopBar() {
  return (
    <div className="col-span-3 flex justify-between items-center p-3 border-b-[1px] border-neutral-700">
      <div className="hidden md:flex gap-2 items-center">
        <IoIosArrowBack />
        <IoIosArrowForward />
      </div>
      <div className="bg-[#0d1117] max-w-full border-[1px] border-neutral-700 rounded-lg px-2 py-1 flex justify-between items-center gap-14">
        <button>
          <BiLockAlt />
        </button>
        <span className="truncate">
          mona-github-github-g59jpq2w5w7.github.dev
        </span>
        <button>
          <TfiReload />
        </button>
      </div>
      <div className="hidden md:flex">
        <TbPlus />
      </div>
    </div>
  );
}

function CodeEditorCodePreview() {
  const imageTarget = "target-globe-image";
  const [isObservingImage, setIsObservingImage] = useState(false);
  useObserver({
    target: imageTarget,
    onObserve: () => {
      setIsObservingImage(true);
    },
    onUnObserve: () => {
      setIsObservingImage(false);
    },
    options: {
      threshold: 0.7,
    },
  });
  return (
    <div className="hidden md:grid grid-rows-[1fr_10fr]">
      <div className="text-xl flex justify-between items-center p-3 bg-[#161b22] ">
        <FiMenu />
        <BsGithub />
        <MdNotificationsNone />
      </div>
      <div className="flex justify-center items-center bg-[#040D21]">
        <motion.img
          id={imageTarget}
          className="w-fit h-fit"
          src={globeImage}
          animate={
            isObservingImage
              ? {
                  y: [30, 0],
                  opacity: [0.4, 1],
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeIn",
                  },
                }
              : {
                  scale: 1,
                  opacity: 0.4,
                }
          }
        />
      </div>
    </div>
  );
}

function CECodeIDE() {
  const tabs = ["index.html", "script.js", "package.json"];
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
</div>`;
  return (
    <div className="col-span-3 md:col-span-1 border-r-[1px] border-neutral-700">
      <ul className="ml-3 flex pt-8">
        {tabs.map((tab, idx) => (
          <li
            key={idx}
            className={
              idx === 0
                ? "bg-[#0d1117] px-3 py-1.5 rounded-t-lg"
                : "px-3 py-1.5 text-neutral-400"
            }
          >
            {tab}
          </li>
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
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
      <CETerminal />
    </div>
  );
}

function CETerminal() {
  const handleObserve = () => {
    setIsAnimateList(true);
  };
  const handleUnObserve = () => {
    setIsAnimateList(false);
  };
  useObserver({
    target: "target-terminal",
    onObserve: handleObserve,
    onUnObserve: handleUnObserve,
  });
  const logs = [
    {
      currentTime: "09:43:36",
      status: "Starting",
      message: "watch-extension:vscode-api-tests",
    },
    {
      currentTime: "09:43:36",
      status: "Finished",
      message: "clean-extension:typescript-language-features",
      after: "2 s",
    },
    {
      currentTime: "09:43:36",
      status: "Starting",
      message: "watch-extension:typescript-language-features",
    },
    {
      currentTime: "09:43:36",
      status: "Finished",
      message: "clean-extension:php-language-features",
      after: "384 ms",
    },
    {
      currentTime: "09:43:40",
      status: "Finished",
      message: "clean-extension:html-language-features-server",
      after: "",
    },
    {
      currentTime: "09:43:40",
      status: "Starting",
      message: "watch-extension:html-language-features-server",
    },
    {
      currentTime: "09:43:43",
      status: "Finished",
      message: "clean-client",
      after: "7.33 s",
    },
    { currentTime: "09:43:43", status: "Starting", message: "watch-client" },
  ];
  const [isAnimateList, setIsAnimateList] = useState<boolean>(false);
  const tabs = ["Terminal", "Output", "Problems", "Debug Console"];

  return (
    <div className="p-4 flex flex-col gap-4">
      <ul className="flex text-[15px] gap-8">
        {tabs.map((tab, idx) => (
          <li
            className={`truncate ${
              idx === 0 ? "text-white" : "text-neutral-400"
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>
      {
        <div className="flex flex-col">
          {logs.map(({ currentTime, status, message, after }, idx) => (
            <motion.div
              className="grid grid-cols-[0.5fr_0.5fr_2.5fr]"
              animate={
                isAnimateList
                  ? {
                      y: [idx * 3 + 9, 0],
                      opacity: [0, 1],
                      transition: {
                        duration: 0 * idx + 0.4,
                        delay: 0.5,
                        ease: "linear",
                      },
                    }
                  : { opacity: 0 }
              }
            >
              <span className="text-gray-500">{`[${currentTime}]`}</span>
              <span className="text-[#8b949e]">{status}</span>
              <div className="flex truncate gap-3">
                <span className=" text-[#58a6ff]">
                  <span className="text-[#8b949e]">'</span>
                  {message}
                  <span className="text-[#8b949e]">'</span>
                </span>
                <span className="text-indigo-500">
                  <span className="text-neutral-500">after </span>
                  {after && <span>{after}</span>}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      }
    </div>
  );
}
