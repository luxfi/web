import type { VideoBlock } from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

export default {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/commerce/silver/product/luxsilver-poster.jpg',
  sources: ['/assets/commerce/silver/product/luxsilver.mp4'],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
      // 1172x1920
      // .61 aspect
    sm: {
        // md * 1/4
      w: 50,
      h: 82
    },

    md: {
      w: 200,
      h: 327
    },

    lg: {
      // match the general size of old site
      w: 250,
      h: 410,
    }

  }
} as VideoBlock