import React from 'react'
import { type MediaBlock } from '@/content/types'
import VideoPlayer from '@/primitives/video-player'

const MediaBlockComponent: React.FC<{
  media: MediaBlock
}> = ({
  media
}) => (
  media.blockType === 'video' ? (
    <VideoPlayer sources={media.sources} {...media.dim} {...media.videoProps} />
  ) : (
    <p>image to do</p>
  )
)

export default MediaBlockComponent

