import { GrAction } from "react-icons/gr"
import { BsBox, BsCodeSquare, BsShieldCheck } from "react-icons/bs"
import { MdOutlineComputer } from "react-icons/md"
import { TfiGithub } from "react-icons/tfi"
import { RiWechatLine } from "react-icons/ri"
import { VscIssues } from "react-icons/vsc"
import Divider from "../Divider"
import TextColumn from "../TextColumn"
export default function ProductDropDown() {
  return (
    <div className='grid lg:grid-cols-[5fr_auto_1fr] bg-white gap-14 p-8 min-w-[550px] text-black rounded-md'>
        <div className="flex flex-col gap-6">
            <ProductRow title="Actions" icon={<GrAction />} paragraph="Automate any workflow" />
            <ProductRow title="Packages" icon={<BsBox />} paragraph="Host and manage packages" />
            <ProductRow title="Security" icon={<BsShieldCheck />} paragraph="Find and fix vulnerabilities" />
            <ProductRow title="Codespaces" icon={<MdOutlineComputer />} paragraph="Instant dev environments" />
            <ProductRow title="Copilot" icon={<TfiGithub />} paragraph="Write better code with AI" />
            <ProductRow title="Code review" icon={<BsCodeSquare />} paragraph="Manage code changes" />
            <ProductRow title="Issues" icon={<VscIssues />} paragraph="Plan and track work" />
            <ProductRow title="Discussions" icon={<RiWechatLine />} paragraph="Collavorate outside of code" />
        </div>
        <div className="hidden lg:flex">
            <Divider direction="vertical" />
        </div>
        <aside className="pr-10">
            <TextColumn title="Explore" paragraphs={[
                "All features",
                "Documentation",
                "Github Skills",
                "Blog"
            ]} />
        </aside>
    </div>
  )
}

interface IProductRow {
    title: string,
    paragraph: string,
    icon: JSX.Element
}
function ProductRow({ title, icon, paragraph }:IProductRow) {
    return (
        <div className='flex items-center gap-4'>
            <div className="text-xl">{icon}</div>
            <div>
                <p className="font-semibold text-neutral-700 leading-5">{title}</p>
                <p className="text-sm text-neutral-500">{paragraph}</p>
            </div>
        </div>
    )
}

interface IDropDownAside {
    title: string,
    paragraphs: string[]
}
