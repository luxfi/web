'use client'
import React from 'react'

import { Dimensions } from '@/types'

interface VideoProps extends React.ComponentPropsWithoutRef<"video"> {
  sources: string[]
  className?: string
  constrainTo?: Dimensions
}

const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoProps>(
({
  sources, 
  className='', 
  constrainTo,
  ...rest
}, ref) => {
  

  return (
    <video ref={ref} {...rest} className={className}>
    {sources.map((source, index) => (  
      <source key={index} src={source} />
    ))} 
    </video>
  )
})

export default VideoPlayer