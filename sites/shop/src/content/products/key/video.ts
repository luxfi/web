import type { VideoBlock } from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

export default  {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
  poster: '/assets/commerce/ps/product/LUX-PASS-poster.jpg',
  sources: ['/assets/commerce/ps/product/LUX-PASS-transcode.mp4'],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
      // 658x720
    sm: {
        // 1/4 * md
      w: 75,
      h: 82
    },

    md:{
      w: 298,
      h: 327
    },

    lg:{
      w: 375,
      h: 410
    }
  }
} as VideoBlock