import { Spinner } from '@nextui-org/react'
import React from 'react'

const LoadingPage = ({ label = 'Loading...' }: { label?: string }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner size="lg" label={label} />
    </div>
  )
}

export default LoadingPage
