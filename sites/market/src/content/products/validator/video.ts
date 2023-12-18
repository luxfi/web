import type { VideoBlock } from '@luxdefi/blocks/def'
import { DEF_VIDEO_PROPS } from '@luxdefi/ui/util'

export default  {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/Lux-VALIDATOR-poster.jpg',
  sources: [
    '/assets/video/Lux-VALIDATOR-transcode.mp4', 
    '/assets/video/Lux-VALIDATOR-transcode.webm'
  ],
    // Determin aspect ration from dims manually...
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    // dims are 656x484, let's cut in half
    // ratio: 1.355

    md: {
      w: 328,
      h: 242
    },

    lg: {
      w: 400,
      h: 295
    },
  }
} as VideoBlock