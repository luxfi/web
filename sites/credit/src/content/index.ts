import type VideoBannerBlock from '@/blocks/def/video-banner'
import type { HeadingBlock } from '@luxdefi/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxdefi/ui/util'

export default [
  {
    blockType: 'video-banner',
    content: [
      {
        blockType: 'heading',
        heading: 'This is the Coral tile'
      } as HeadingBlock
    ],
    video: {
      blockType: 'video',
      videoProps: DEF_VIDEO_PROPS, 
      poster: '/assets/video/coral-poster-comp.png',
      sources: ['/assets/video/coral-md.mp4'],
      dim: {md: {w: 1920, h: 1080}},
    }
  },
] as VideoBannerBlock[]