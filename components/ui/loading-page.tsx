import { Spinner } from '@nextui-org/react'
import React from 'react'

const LoadingPage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Spinner size='lg' />
    </div>
  )
}

export default LoadingPage
