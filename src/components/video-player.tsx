'use client'

import React from 'react'

interface VideoProps extends React.ComponentPropsWithoutRef<"video"> {
  sources: string[]
}

const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoProps>(
  ({sources, ...rest}, ref) => (
    <video ref={ref} {...rest}>
      {sources.map((source, iindex) => (  
        <source key={iindex} src={source} />
      ))} 
    </video>
  )
)

export default VideoPlayer