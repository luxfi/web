import React from 'react'

import Image from 'next/image'

import type { Dimensions, TShirtSize, TShirtDimensions } from '@/types'
import type { Block, MediaBlock } from '@/types/block'
import VideoPlayer from '@/primitives/video-player'

const asNum = (n: number | `${number}`): number => (
  (typeof n === 'number') ? n : parseInt(n, 10)  
)

  // https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
const constrain = (dim: Dimensions, constraint: Dimensions): Dimensions => {
  const c = {
    w: asNum(constraint.w),
    h: asNum(constraint.h)
  }
  const d = {
    w: asNum(dim.w),
    h: asNum(dim.h)
  }

  const ratio = Math.min(c.w / d.w, c.h / d.h)
  return {
    w: Math.round(d.w * ratio),
    h: Math.round(d.h * ratio)
  }
}

const MediaBlockComponent: React.FC<{
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
  
  if (block.blockType !== 'video' && block.blockType !== 'image') {
    return <>media block required</>
  }

  const media = block as MediaBlock

  if (media.blockType === 'video') {
    const videoDims = media.dim as TShirtDimensions
    const dim = ((size && size in videoDims) ? videoDims[size] : videoDims.md) as Dimensions
    const conDim = (constraint ? constrain(dim, constraint) : dim) 
    return usePoster ? (
      <Image src={media.image!} alt='image' width={conDim.w} height={conDim.h} className={className}/>
    ) : (
      <VideoPlayer 
        className={className} 
        sources={media.sources} 
        width={conDim.w} 
        height={conDim.h} 
        {...media.videoProps} 
      />
    )
  }

  const dim = media.dim as Dimensions
  const conDim = (constraint ? constrain(dim, constraint) : dim) 

  return (
    <Image src={media.image!} alt='image' width={conDim.w} height={conDim.h}  className={className}/>
  )
}

export default MediaBlockComponent

