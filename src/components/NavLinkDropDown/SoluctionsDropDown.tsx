import React from 'react'
import Divider from '../Divider'
import TextColumn from '../TextColumn'

export default function SoluctionsDropDown() {
  return (
    <div className='rounded-md p-6 flex flex-col gap-7 bg-white min-w-[300px]'>
        <TextColumn title="For" paragraphs={["Enterprise", "Teams", "Startups", "Education"]} />
        <Divider direction='horizontal' />
        <TextColumn title="By Solucion" paragraphs={["CI/CD & Automation", "DevOps", "DevSecOps"]} />
        <Divider direction='horizontal' />
        <TextColumn title="Case Studies" paragraphs={["Customer Stories", "Resources"]} />
    </div>
  )
}
