import type { VideoBlock } from '@hanzo/ui/blocks/def'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

export default  {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
  poster: '/assets/video/Lux-PASS-poster.jpg',
  sources: [
    '/assets/video/LUX-PASS-transcode.mp4', 
    '/assets/video/LUX-PASS-transcode.webm'
  ],
    // Determin aspect ration from dims manually...
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    // dims are 658x720, 
    // ratio: 0.914
    md: {
      w: 274,
      h: 300 // otherwise it's too cramped on smaller phones
    },

    lg: {
      w: 375,
      h: 410
    }

  }
} as VideoBlock