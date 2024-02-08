import type { VideoBlock } from '@luxdefi/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxdefi/ui/util'

export default {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/fireworks-poster-comp.png',
  sources: ['/assets/video/fireworks-md.mp4'],
  dim: {md: {w: 1920, h: 1080}},
} as VideoBlock
