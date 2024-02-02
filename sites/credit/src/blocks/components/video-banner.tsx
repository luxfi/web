import React from 'react'

import type { Block } from '@luxdefi/ui/blocks'
import { cn } from '@luxdefi/ui/util'

import type VideoBannerBlock from '../def/video-banner'

const VideoBannerComponent: React.FC<{
  block: Block
  className: string
}> = ({
  block,
  className=''
}) => {

  if (block.blockType !== 'video-banner') {
    return <>video banner block required</>
  }
  const b = block as VideoBannerBlock

  return <div className={cn('border border-accent ', className)} style={{
    height: '100%',
    //width: b.video.dim.md.w,
    aspectRatio: 1.77778,
    backgroundImage: `url(${b.video.poster!})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  }} />
}

export default VideoBannerComponent