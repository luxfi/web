'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'

import Image from 'next/image'

import type { Dimensions, TShirtSize, TShirtDimensions } from '../../types'
import { constrain, asNum } from '../../util'
import type { Block, VideoBlock } from '../def'
import { VideoPlayer } from '../../primitives'

const VideoBlockComponent: React.FC<{
  block: Block
  className?: string
  usePoster?: boolean
  size?: TShirtSize
  constraint?: Dimensions
}> = ({
  block,
  className='',
  usePoster=false,
  size='md',
  constraint
}) => {

  const [_dim, setDim] = useState<Dimensions | undefined>(undefined)

  const onResize = () => { 
    const height = window.innerHeight 
    const width = window.innerWidth 
 
    setDim({
      w: width,
      h: height
    }) 
  } 

  useEffect(() => { 
    if (window) {
      window.addEventListener('resize', onResize) 
      return () => window.removeEventListener('resize', onResize) 
    }
  }, []) 

  useLayoutEffect(() => { 
    onResize() 
  }, [])


  if (block.blockType !== 'video') {
    return <>video block required</>
  }

  const b = block as VideoBlock
  if (b.sizing?.vh) {
    const H = `${b.sizing.vh}vh`
    const ar = asNum(b.dim.md.w) / asNum(b.dim.md.h)
      // serverside, generate the css for the correctly sized poster image
    if (!_dim) {
      return <div className='dummy-div' style={{
        height: H,
        width: `calc(${H}*${ar})`,
        backgroundImage: `url(${b.poster!})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
      }} />
    }
    else {
      const height = ((b.sizing.vh / 100) * asNum(_dim.h))
      const dim  = {
        h: height,
        w: height * ar
      }
      return ((
        <VideoPlayer 
          className={className} 
          sources={b.sources} 
          width={dim.w} 
          height={dim.h} 
          {...b.videoProps} 
        />
      ))
    }
  }
  
  const videoDims = b.dim as TShirtDimensions
  const dim = ((size && size in videoDims) ? videoDims[size] : videoDims.md) as Dimensions
  const conDim = (constraint ? constrain(dim, constraint) : dim) 
  return usePoster ? (
    <Image src={b.poster!} alt='image' width={conDim.w} height={conDim.h} className={className}/>
  ) : (
    <VideoPlayer 
      className={className} 
      sources={b.sources} 
      width={conDim.w} 
      height={conDim.h} 
      {...b.videoProps} 
    />
  )
}

export default VideoBlockComponent
