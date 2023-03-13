import React from 'react'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { BsGithub, BsTwitch, BsYoutube } from 'react-icons/bs'
import { IoLogoTiktok } from 'react-icons/io5'
import { RiLinkedinFill } from 'react-icons/ri'
import { Button } from '../components/sticthes/Button'

export default function Footer() {
    const columns = [
        ["Product", "Features", "Security", "Team", "Enterprise", "Customer stories", "The ReadME Project", "Pricing", "Recourses", "Roadmap"],

        ["Support", "Docs", "Community Forum", "Professional Services", "Skills", "Status", "Contact GitHub"],
        ["Company", "About", "Blog", "Careers", "Press", "Inclusion", "Social Impact", "Shop"]
    ]
  return (
    <>
        <div className='p-4 mt-40'>
            <div className='text-sm text-neutral-500'>
                <p>The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security, a commissioned study conducted by Forrester</p>
                <p>Consulting, 2022. Results are for a composite organization based on interviewed customers.</p>
                <p>GitHub, Octoverse 2022 The state of open source software.</p>
            </div>
            <div className='md:grid md:grid-cols-[3fr_6fr]  mt-16'>
                <div className='flex flex-col gap-3'>
                    <h5 className='text-4xl mb-2 font-semibold'>GitHub</h5>
                    <div className='text-gray-500 text-sm'>
                        <p className='text-neutral-200'>Subscribe to our newsletter</p>
                        <p>Get product updates, company new, and more.</p>
                    </div>
                    <Button className='px-4 py-1.5 w-fit border-neutral-600' decoration="outline">
                        Subscribe
                    </Button>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-2 gap-10 mt-10'>
                    {columns.map((list, idx) => (
                        <ul key={idx} className="flex flex-col gap-3 text-sm text-neutral-500">
                            {list.map((i, idx) => (
                                <li key={idx}>{i}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
        <div className='bg-[#161b22] text-gray-500  p-5 flex justify-between flex-wrap md:flex-nowrap'>
            <div className='flex flex-wrap md:flex-nowrap gap-4 items-center text-[13px]'>
                <span>@ 2023 GitHub, Inc.</span>
                <span>Terms</span>
                <span>Privacy {"(Updated 08/2022)"}</span>
                <span>Sitemap</span>
                <span>What is Git</span>
            </div>
            <div className='flex items-center gap-3'>
                <AiOutlineTwitter />
                <AiFillFacebook />
                <RiLinkedinFill />
                <BsYoutube />
                <BsTwitch />
                <IoLogoTiktok />
                <BsGithub />
            </div>
            
        </div>
    </>
  )
}
