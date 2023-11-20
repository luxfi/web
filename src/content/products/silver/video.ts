import { type MediaBlock } from '@/types/block'
import { DEF_VIDEO_PROPS } from '@/util'

export default {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  sources: ['/assets/video/luxsilver.mp4'],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
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
} as MediaBlock