'use client'
import { Tabs, Tab } from '@nextui-org/react'
import React from 'react'
import FileUpload from './file-upload'

const DemoPage = () => {
  return (
    <div className='max-w-7xl flex-grow w-full h-full flex p-8 flex-col justify-center items-start gap-16'>
      <span className='flex flex-row text-4xl md:text-7xl font-thin'>
        Select a&nbsp;<p className='text-primary font-normal'>Video</p>
      </span>
      <Tabs color="primary" aria-label="Tabs" radius='full'>
        <Tab key="uplaod" title="Upoad a video" className='w-full'>
          <FileUpload />
        </Tab>
        <Tab key="default" title="Demo video" className='w-full'>
          hehe
        </Tab>
      </Tabs>
    </div>
  )
}

export default DemoPage