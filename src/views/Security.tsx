import { HTMLAttributes, useState } from "react";
import { BiShield } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import AnimateOnView from "../components/AnimateOnView";
import Empty from "../components/Empty";
import GradientBar from "../components/GradientBar";
import HoverBtn from "../components/HoverBtn";
import MovingCard from "../components/MovingCard";
import { useCurrentSection, useObserver } from "../hooks";
import listImg from "../assets/illu-ghas-list.png";
import gitBranchSecurity from "../assets/git-branch-security.svg";
import DYK from "../components/DYK";
import secretsScanningImg from "../assets/illu-secret-scanning.webp"
import dependabotImg from "../assets/illu-dependabot.webp"
import codeScanningImg from "../assets/illu-code-scanning.webp"
export default function Security() {
  const { updateCurrentSection } = useCurrentSection()!;
  const projectsTextTarget = "projects-text-target";
  const [isObservingProjectsText, setIsObservingProjectsText] = useState(false);
  const handleUpdateSection = () => {
    updateCurrentSection("security");
  };
  const steps = [
    { text: "Initialize CodeQL", time: "1m 42s" },
    { text: "Autobuild", time: "1m 24s" },
    { text: "Perform CodeQL Analyses", time: "1m 36s" },
  ];
  useObserver({
    target: projectsTextTarget,
    onObserve() {
      setIsObservingProjectsText(true);
    },
    onUnObserve() {
      setIsObservingProjectsText(false);
    },
  });

  return (
    <>
      {/* ROW 1 */}
      <GradientBar color="#0d1117, #797ef9, #abb4ff" />
      <Empty />

      {/* ROW 2 */}
      <GradientBar
        color="#0d1117, #797ef9, #abb4ff"
        icon={<BiShield />}
        iconColor="#797ef9"
      />
      <div>
        <AnimateOnView
          onView={handleUpdateSection}
          animate={{
            x: [-50, 0],
            opacity: [0, 1],
            transition: {
              ease: "easeIn",
            },
          }}
        >
          <>
            <span className="text-2xl font-semibold">Security</span>
            <p className="font-semibold text-2xl md:text-5xl md:w-[85%]">
              <span className="text-[#797ef9]">
                Embed security into the developer workflow.{" "}
              </span>
              With GitHub, developers can secure their code in minutes and
              organizations can automatically comply with regulations.
            </p>
          </>
        </AnimateOnView>
      </div>
      {/* ROW 3 */}
      <MovingCard className="col-span-2 w-full">
        <div className="relative p-20 grid place-content-center">
          <div className="absolute top-14 left-14 text-gray-500 text-sm">
            <span>cmake.yml</span>
            <br />
            <span className="text-gray-600">on: push</span>
          </div>
          <div className="mt-14 flex flex-col md:flex-row md:items-center md:gap-0 gap-4">
            <AnimateOnView>
              <StepCard>
                <Step text="Build" time="1m 21s" />
              </StepCard>
            </AnimateOnView>
            <Linker />
            <AnimateOnView>
              <StepCard className="relative flex flex-col gap-4 rounded-l-none translate-y-10">
                <div className="absolute top-[-2rem] left-0 bg-inherit px-8 py-1 rounded-t-md">
                  Steps
                </div>
                {steps.map((step, idx) => (
                  <AnimateOnView
                    key={step.text}
                    animate={{
                      y: [idx * 6 + 2, 0],
                      transition: { duration: 0.2 * idx + 0.1 },
                    }}
                  >
                    <Step {...step} />
                  </AnimateOnView>
                ))}
              </StepCard>
            </AnimateOnView>
          </div>
        </div>
      </MovingCard>
      {/* ROW 4 */}
      <GradientBar
        color="#0d1117, #797ef9"
        animateWhen={isObservingProjectsText}
      />

      <div className="grid md:grid-cols-2 relative">
        <AnimateOnView animate={{ x: [50, 0], opacity: [0, 1] }}>
          <div className="flex flex-col justify-between gap-4 py-10 px-6 mt-32 md:mt-0 md:p-14">
            <p className="text-white font-semibold md:text-2xl text-xl">
              <span className="text-[#797ef9] md:w-2/3">
                GitHub Advanced Security{" "}
              </span>
              lets you gain visibility into your security posture, respond to
              threats proactively, and ship secure applications quickly.
            </p>
            <HoverBtn>Get GitHub Advanced Security</HoverBtn>
          </div>
        </AnimateOnView>
        <AnimateOnView
          animate={{
            x: [40, 0],
            opacity: [0, 1],
            transition: { duration: 0.2 },
          }}
        >
          <>
            <img
              src={listImg}
              className="hidden md:flex -translate-y-10 rounded-lg border-[1px] border-black"
            />
            <img
              src={listImg}
              className="flex md:hidden translate-y-[-270%] -right-10 rounded-lg border-[1px] border-black"
            />
          </>
        </AnimateOnView>
      </div>

      <div className="-translate-y-10">
        <div className="mr-auto w-full md:h-[450px] gap-0">
          <GradientBar
            color="#797ef9, #0d1117"
            animateWhen={isObservingProjectsText}
            animate={{ transition: { delay: 0.15 } }}
          >
            <img
              className="hidden md:flex absolute -right-10"
              src={gitBranchSecurity}
            />
          </GradientBar>
        </div>
      </div>
      <div
        className="md:ml-12 flex flex-col gap-1 my-auto -translate-y-7"
        id={projectsTextTarget}
      >
        <AnimateOnView
          animate={{
            x: [10, 0],
            opacity: [0, 1],
            transition: { duration: 0.2 },
          }}
        >
          <>
            <DYK color="#797ef9" />
            <h4 className="text-[#797ef9] text-6xl font-semibold">
              56 million projects
            </h4>
            <p className="font-semibold mt-2">fixed vulnerabilities with GitHub</p>
          </>
        </AnimateOnView>
      </div>
      <div className="col-span-2 flex flex-col gap-[1rem] md:grid md:grid-cols-2">
          <MovingCard className="col-span-2" color="#797ef9">
            <div className="md:grid md:grid-cols-2 flex flex-col md:h-[30rem] h-[30rem] py-10 px-6 md:p-14">
              <div className="flex flex-col justify-between">
                <p className="font-semibold md:w-[80%] text-neutral-400"><span className="text-white">Secret scanning</span> automatically looks for partner patterns and prevents fraudulent use of accidentally committed secrets.</p>
                <HoverBtn>Read about secret scanning </HoverBtn>
              </div>
              <AnimateOnView className="hidden md:flex">
                <img src={secretsScanningImg} className="absolute right-0 bottom-0" />
              </AnimateOnView>
              <img src={secretsScanningImg} className="flex md:hidden absolute right-0 bottom-0" />

            </div>
          </MovingCard>
          <MovingCard color="#797ef9">
            <div className="grid grid-rows-2 md:h-[45rem] h-[30rem] py-10 px-6 md:p-14">
              <div className="flex flex-col">
                <p className="text-2xl mb-1 font-semibold md:w-[80%] text-neutral-400"><span className="text-white">Dependabot</span> makes it easy to find and fix vulnerable dependencies in your supply chain.</p>
                <HoverBtn>Explore Dependabot </HoverBtn>
              </div>
              <AnimateOnView className="hidden md:flex">
                <img src={dependabotImg} className="absolute right-0 bottom-0" />
              </AnimateOnView>
              <img src={dependabotImg} className="flex md:hidden absolute right-0 bottom-0" />

            </div>
          </MovingCard>
          <MovingCard color="#797ef9">
            <div className="grid grid-rows-2 md:h-[45rem] h-[30rem] py-10 px-6 md:p-14">
              <div className="flex flex-col">
                <p className="text-2xl mb-1 font-semibold md:w-[80%] text-neutral-400"><span className="text-white">Code scanning</span> is GitHub’s static code analysis tool that helps you remediate issues in your code.</p>
                <HoverBtn>Download the latest SAST ebook</HoverBtn>
              </div>
              <AnimateOnView className="hidden md:flex">
                <img src={codeScanningImg} className="absolute right-0 bottom-0" />
              </AnimateOnView>
              <img src={codeScanningImg} className="flex md:hidden absolute right-0 bottom-0" />
            </div>
          </MovingCard>
      </div>
    </>
  );
}

function Linker() {
  return (
    <div className="rotate-90 md:rotate-0 relative w-14 h-[2.1px] bg-neutral-100/60">
      <Circle position="right" />
      <Circle position="left" />
    </div>
  );

  function Circle({ position = "right" }: { position: "right" | "left" }) {
    return (
      <div
        className={`w-2.5 h-2.5 bg-white/60 rounded-full absolute ${position}-0 center-v p-[1px]`}
      >
        <div className="bg-neutral-800 w-full h-full rounded-full"></div>
      </div>
    );
  }
}

function StepCard({
  children,
  ...props
}: {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`bg-neutral-200/20 rounded-md px-10 py-5 ${" "} ${
        props.className
      }`}
    >
      {children}
    </div>
  );
}

function Step({ text, time }: { text: string; time: string }) {
  return (
    <div className="flex items-center justify-between text-xl gap-4">
      <div className="flex items-center gap-4">
        <BsFillCheckCircleFill color="#3fb950" />
        <span className="text-[15px] truncate">{text}</span>
      </div>
      <span className="hidden md:flex text-sm text-neutral-400">{time}</span>
    </div>
  );
}
