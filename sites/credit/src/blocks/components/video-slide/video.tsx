'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import { cn } from '@luxdefi/ui/util'

const Video: React.FC<{
  sources: string[],
  className?: string,
  initialInView: boolean
}> = ({
  sources,
  className='',
  initialInView
}) => {
  const { ref, inView } = useInView({
    threshold: 0.75,
    initialInView,
  })

  return (
    <div ref={ref} className={cn('border border-destructive', className)}>
    {inView && (
        <video
        autoPlay
        loop
        muted
        style={{
          margin: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }} 
      >
        {sources.map((src, index) => (  
          <source key={index} src={src} />
        ))} 
      </video>
    )}
    </div>
  ) 
}

export default Video