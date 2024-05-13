import type { VideoBlock } from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

export default  {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
  poster: '/assets/commerce/cr/product/black-f-700x441.jpg',
  sources: ['/assets/commerce/cr/product/gunmetal-card.mp4'],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
      // 1920x1080
      // .67 ratio
    sm: {
        // 1/4 * md
      w: 145,
      h: 82
    },

    md:{
      w: 581,
      h: 327
    },

    lg:{
      w: 728,
      h: 410
    }
  }
} as VideoBlock