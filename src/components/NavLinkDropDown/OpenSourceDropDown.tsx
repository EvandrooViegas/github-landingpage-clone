import React from 'react'
import Divider from '../Divider'
import TextColumn from '../TextColumn'

export default function OpenSourceDropDown() {
  return (
    <div className='rounded-md p-6 flex flex-col gap-3 bg-white min-w-[300px]'>
        <TextColumn title="GitHub Sponsors" paragraphs={["Found open source developers"]} />
        <Divider direction='horizontal' />
        <TextColumn title="The ReadME Project" paragraphs={["Github community articles"]} />
        <Divider direction='horizontal' />
        <TextColumn title="Repositories" paragraphs={["Topics", "Trending", "Collections"]} />
    </div>
  )
}
