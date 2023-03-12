//components
import GradientBar from "../components/GradientBar";
import { motion } from "framer-motion";
//icons
import { CgShoppingBag } from "react-icons/cg";
//assets
import issuesPlanImg from "../assets/issues-plan.webp";
import projectsImg from "../assets/projects.png";
import gitBranchCollaboration from "../assets/git-branch-collaboration.svg";
import discussionsImg from "../assets/illu-discussions.webp";
import pullRequestsImg from "../assets/illu-pull-requests.webp";
//hooks
import { useState } from "react";
import { useCurrentSection, useObserver } from "../hooks";
import HoverBtn from "../components/HoverBtn";
import DYK from "../components/DYK";
import MovingCard from "../components/MovingCard";
//sponsors images
import commandpostImg from "../assets/commandpost.png";
import kazuponImg from "../assets/commandpost.png";
import eslintImg from "../assets/eslint.png";
import curlImg from "../assets/curl.webp";
import samuelImg from "../assets/imolorhe.webp";
import sindresorhusImg from "../assets/sindresorhus.webp";
import dayhaysosImg from "../assets/dayhaysoos.webp";
import prophenImg from "../assets/prophen.webp";
import { AiOutlineHeart } from "react-icons/ai";
import AnimateOnView from "../components/AnimateOnView";
import { TfiBag } from "react-icons/tfi";
export default function Collaboration() {
  const triggerElementTarget = "trigger-section";
  const imageTarget = "trigger-image-adasdasdqwdawdsad";
  const reductionTextTarget = "reduction-text-target";
  const { updateCurrentSection } = useCurrentSection()!;
  const [isObservingImage, setIsObservingImage] = useState(false);
  const [isObservingReductionText, setIsObservingReductionText] =
    useState(false);
  useObserver({
    target: triggerElementTarget,
    onObserve: () => {
      updateCurrentSection("collaboration");
    },
  });
  useObserver({
    target: imageTarget,
    onObserve: () => {
      setIsObservingImage(true);
    },
    onUnObserve: () => {
      setIsObservingImage(false);
    },
  });
  useObserver({
    target: reductionTextTarget,
    onObserve() {
      setIsObservingReductionText(true);
    },
    onUnObserve() {
      setIsObservingReductionText(false);
    },
  });

  return (
    <>
      {/* ROW 1 */}

      <GradientBar
        color="#0d1117, #ea6045, #ffa28b"
        animateWhen={isObservingImage}
      /> 
      <div></div>
      {/* ROW 2 */}
      
      <GradientBar
        icon={<TfiBag  />}
        iconColor="#503539"
        color="#ffd6cc, #ec6547, #ec6547, #0d1117"
        animateWhen={isObservingImage}
        animate={{
          transition: {
            duration: 0.7,
            delay: 0.3,
          },
        }}
      /> 
      <div>
        <motion.p
          id={triggerElementTarget}
          className="text-2xl font-semibold"
          animate={
            isObservingImage
              ? {
                  opacity: [0, 1],
                  x: [-40, 0],
                  transition: { duration: 0.3 },
                }
              : {
                  opacity: 0,
                }
          }
        >
          Collaboration
        </motion.p>
        <motion.p
          className="font-semibold text-2xl md:text-5xl md:w-[85%]"
          animate={
            isObservingImage
              ? {
                  opacity: [0, 1],
                  x: [-24, 0],
                  transition: { duration: 0.5 },
                }
              : {
                  opacity: 0,
                }
          }
        >
          <span className="text-[#ffa28b]">Supercharge collaboration</span>. We
          provide unlimited repositories, best-in-class version control, and the
          world’s most powerful open source community—so your team can work more
          efficiently together.
        </motion.p>
      </div>
      {/* ROW 3 */}
      <div className="col-span-2 rounded-2xl border-[1px] border-black">
        <img className="rounded-lg" id={imageTarget} src={issuesPlanImg} />
      </div>
      {/* ROW 4 */}
      
       <div className="translate-y-10">
        <GradientBar color="#0d1117, #ea6045, #ea6045" />
       </div>

      <div className="grid grid-cols-2 items-center md:ml-20">
        <AnimateOnView animate={{ x: [30, 0], opacity: [0, 1], transition: { ease: "easeIn" } }}>
          <div>
            <p className="text-2xl font-semibold">
              <span className="text-[#ffa28b]">
                GitHub Issues and GitHub Projects
              </span>{" "}
              supply flexible project management tools that adapt to your team
              alongside your code.
            </p>
            <HoverBtn>Explore Github Issues</HoverBtn>
          </div>
        </AnimateOnView>
        <AnimateOnView animate={{ y: [30, 0], opacity: [0, 1], transition: { ease: "easeIn" } }}> 
          <img
            className="w-[90%] border-[1px] border-black rounded-xl -translate-y-[80px]"
            src={projectsImg}
          />
        </AnimateOnView>
      </div>
      {/* ROW 5 */}
      <motion.div
        className="mr-auto w-full md:h-[450px] gap-0"
        animate={
          isObservingReductionText
            ? {
                opacity: [0, 1],
                transition: { delay: 0.7 },
              }
            : { opacity: 0 }
        }
      >
        <GradientBar color="#ea6045, #0d1117">
          <img
            className="hidden md:flex absolute -right-10"
            src={gitBranchCollaboration}
          />
        </GradientBar>
      </motion.div>
      <motion.div
        className="md:ml-20 h-full flex justify-center flex-col"
        animate={
          isObservingReductionText
            ? {
                opacity: [0, 1],
                x: [-15, 0],
                transition: { delay: 1.2 },
              }
            : { opacity: 0 }
        }
      >
        <DYK color="#ffa28b" />
        <h4
          className="text-[#ffa28b] text-4xl md:text-6xl font-semibold"
          id={reductionTextTarget}
        >
          80% reduction
        </h4>
        <p className="text-xl font-semibold md:mt-0 mt-2">
          in onboarding time with Github
        </p>
      </motion.div>
      <div className="col-span-2 grid md:grid-cols-2 gap-[1rem]">
        <MovingCard color="#ea6045">
          <>
            <div className="flex flex-col justify-between gap-4 py-10 px-6 md:p-14">
              <p className="text-neutral-400 font-semibold text-2xl">
                <span className="text-white md:w-2/3">GitHub Discussions </span>
                create soace to ask questions and have open-ended conversations.
              </p>
              <HoverBtn>Enable GitHub Discussions</HoverBtn>
            </div>
            <AnimateOnView>
              <img src={discussionsImg} className="mx-auto" />
            </AnimateOnView>
          </>
        </MovingCard>
        <MovingCard color="#ea6045">
          <>
            <div className="flex flex-col justify-between gap-4 py-10 px-6 md:p-14">
              <p className="text-neutral-400 font-semibold text-2xl">
                <span className="text-white md:w-2/3">Pull requests</span>
                allow real-time communication and collaboration about code
                changes
              </p>
              <HoverBtn>Check out pull requests</HoverBtn>
            </div>
            <AnimateOnView>
              <img src={pullRequestsImg} />
            </AnimateOnView>
          </>
        </MovingCard>
        <div className="col-span-2">
          <MovingCard color="#ea6045">
            <div className="grid grid-cols-2 items-center ">
              <div className="flex flex-col justify-between gap-4 py-10 px-6 h-full md:p-14">
                <p className="text-neutral-400 font-semibold text-2xl md:w-[85%]">
                  <span className="text-white ">GitHub Sponsors</span>
                  lets you support your favorite open souce maintainers and
                  projects
                </p>
                <HoverBtn>Invest GitHub Sponsors</HoverBtn>
              </div>

              <div className="overflow-hidden relative h-[400px]">
                <RotatedSponsors />
              </div>
            </div>
          </MovingCard>
        </div>
      </div>
    </>
  );
}

function RotatedSponsors() {
  const sponsors = [
    { name: "CommandPost", img: commandpostImg },
    { name: "António", img: kazuponImg },
    { name: "kazuya", img: kazuponImg },
    { name: "ESLint", img: eslintImg },
    { name: "curl", img: curlImg },
    { name: "Samuel", img: samuelImg },
    { name: "sindresorhus", img: sindresorhusImg },
    { name: "dayhaysos", img: dayhaysosImg },
    { name: "prophen", img: prophenImg },
  ];
  return (
    <div className="absolute left-32 -top-24 grid grid-cols-3 gap-8 -rotate-[20deg]">
      {sponsors.map(({ name, img}, idx) => (
        <AnimateOnView key={idx} animate={{
            opacity:  [0, 1],
            scale: [0.9, 1],
            y: [0, 0.6 * idx + -30],
            transition: {
                duration: 0.2 * idx + 0.1
            }
        }}>
          <div
            className="flex-v flex-col gap-3 border-[1px] border-neutral-800 rounded-lg px-8 py-6"
            key={name}
          >
            <img src={img} className="w-24 rounded-full" />
            <h5 className="text-neutral-400">{name}</h5>
            <button className="bg-[#21262d] flex-v gap-2 border-[1px] border-neutral-700 px-3 py-0.5 rounded-lg">
              <span>
                <AiOutlineHeart />
              </span>
              <span>Sponsor</span>
            </button>
          </div>
        </AnimateOnView>
      ))}
    </div>
  );
}
