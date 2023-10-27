import React from 'react'
import { type MediaBlock } from '@/content/types'
import VideoPlayer from '@/primitives/video-player'

const MediaBlockComponent: React.FC<{
  media: MediaBlock
  className?: string
}> = ({
  media,
  className
}) => (
  media.blockType === 'video' ? (
    <VideoPlayer className={className} sources={media.sources} {...media.dim} {...media.videoProps} />
  ) : (
    <p>image to do</p>
  )
)

export default MediaBlockComponent

