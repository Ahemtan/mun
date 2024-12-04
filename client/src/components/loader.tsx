import { Loader2 } from 'lucide-react'
import React from 'react'

const LoaderComponent = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <Loader2 className='animate-spin h-16 w-16' />
    </div>
  )
}

export default LoaderComponent