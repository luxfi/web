import { type MediaBlock } from '@/types/block'
import { DEF_VIDEO_PROPS } from '@/util'

export default  {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  sources: ['/assets/video/luxgold.mp4'],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
      // .67 ratio
    sm: {
        // 1/4 * md
      width: 55,
      height: 82
    },

    md:{
      width: 219,
      height: 327
    },

    lg:{
      width: 275,
      height: 410
    }
  }
} as MediaBlock