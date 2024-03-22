'use client'
import { Button } from '@nextui-org/button'
import { ChangeEvent, useState } from 'react';
import { FaTrashCan, FaVideo } from 'react-icons/fa6';
import { HiOutlineUpload } from "react-icons/hi";

const FileUpload = () => {
  const [files, setFiles] = useState<any[]>([])

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const reqfiles: FileList | null = event.target.files
    if (reqfiles?.length)
      setFiles([...files, reqfiles[0]])
  }
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='relative gap-4 w-full min-w-72 p-4 border-2 border-dashed border-zinc-500 rounded-xl flex flex-col justify-center items-center'>
        <input onChange={handleFileUpload} className='w-full h-full cursor-pointer absolute top-0 left-0 opacity-0 z-10' type='file' />
        <span className='text-zinc-300'>Drop a video file</span>
        <Button variant="solid" color="primary" startContent={<HiOutlineUpload size={20} />}>Upload</Button>
      </div>
      <div className='w-full flex flex-col gap-2'>
        {
          files?.map(
            (file: File, idx: number) =>
              <div key={idx} className='flex flex-row justify-between items-center gap-2 rounded-xl bg-zinc-700 px-4 py-2'>
                <div className='flex flex-row items-center gap-2'>
                  <FaVideo size={22} />
                  <span className='w-full text-ellipsis whitespace-nowrap'>{file.name}</span>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <Button isIconOnly variant="faded" color="danger">
                    <FaTrashCan size={20} />
                  </Button>
                </div>
              </div>
          )
        }
      </div>
    </div>
  )
}

export default FileUpload