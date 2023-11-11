import React from 'react'

import Image from 'next/image'

import { type TShirtSize } from '@/types'
import type { Block, MediaBlock, VideoDimensions, ImageDimensions } from '@/types/block'
import VideoPlayer from '@/primitives/video-player'

const MediaBlockComponent: React.FC<{
  block: Block
  className?: string
  usePoster?: boolean
  size?: TShirtSize
}> = ({
  block,
  className='',
  usePoster=false,
  size='md'
}) => {
  
  if (block.blockType !== 'video' && block.blockType !== 'image') {
    return <>media block required</>
  }

  const media = block as MediaBlock

  if (media.blockType === 'video') {
    const videoDims = media.dim as VideoDimensions
    const dim = (size === 'sm' && !videoDims.sm) ? videoDims.md : videoDims[size]
    return usePoster ? (
      <Image src={media.image!} alt='image' {...dim} className={className}/>
    ) : (
      <VideoPlayer 
        className={className} 
        sources={media.sources} 
        {...dim} 
        {...media.videoProps} 
      />
    )
  }

  const dim = media.dim as ImageDimensions

  return (
    <Image src={media.image!} alt='image' {...dim} className={className}/>
  )
}

export default MediaBlockComponent

