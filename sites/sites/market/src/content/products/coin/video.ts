import type { VideoBlock } from '@luxdefi/ui/blocks/def'
import { DEF_VIDEO_PROPS } from '@luxdefi/ui/util'

export default  {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/LUX-COIN-poster.jpg',
  sources: [
    '/assets/video/LUX-COIN-transcode.mp4', 
    '/assets/video/LUX-COIN-transcode.webm'
  ],
    // Determin aspect ration from dims manually...
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    // dims are 546x540, let's cut in half
    // ratio: 1.01

    md: {
      w: 273,
      h: 270
    },

    lg: {
      w: 415,
      h: 410
    }
  }
} as VideoBlock