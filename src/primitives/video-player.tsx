'use client'

import React from 'react'

interface VideoProps extends React.ComponentPropsWithoutRef<"video"> {
  sources: string[]
  className?: string
}

const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoProps>(
  ({sources, className='', ...rest}, ref) => (
    <video ref={ref} {...rest} className={className }>
      {sources.map((source, iindex) => (  
        <source key={iindex} src={source} />
      ))} 
    </video>
  )
)

export default VideoPlayer