import React from 'react'
import { type MediaBlock } from '@/content/types'
import VideoPlayer from './video-player'

const MediaComponent: React.FC<{
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

export default MediaComponent

