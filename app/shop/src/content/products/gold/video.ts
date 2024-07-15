import type { VideoBlock } from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxfi/data'

export default  {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
  poster: '/assets/commerce/gold/product/luxgold-poster.jpg',
  sources: ['/assets/commerce/gold/product/luxgold.mp4'],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
      // 1282x1920
      // .67 ratio
    sm: {
        // 1/4 * md
      w: 55,
      h: 82
    },

    md:{
      w: 219,
      h: 327
    },

    lg:{
      w: 275,
      h: 410
    }
  }
} as VideoBlock