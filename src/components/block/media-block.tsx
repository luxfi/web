import React from 'react'
import { type MediaBlock, type VideoDimensions /*, type ImageDimensions */ } from '@/types/blocks'
import VideoPlayer from '@/primitives/video-player'

const MediaBlockComponent: React.FC<{
  media: MediaBlock
  className?: string
  size?: 'sm' | 'md' | 'lg'
}> = ({
  media,
  className,
  size='md'
}) => {
  
  if (media.blockType === 'video') {
    const videoDims = media.dim as VideoDimensions
    const dim = (size === 'sm' && !videoDims.sm) ? videoDims.md : videoDims[size]
    return (
      <VideoPlayer 
        className={className} 
        sources={media.sources} 
        {...dim} 
        {...media.videoProps} 
      />
    )
  }

  return (
    <p>TODO: Image in Media Block</p>
  )
}

export default MediaBlockComponent

