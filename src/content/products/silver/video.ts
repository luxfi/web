import { type MediaBlock } from '@/types/blocks'
import { defaultVideoProps } from '@/util'

export default {
  blockType: 'video',
  videoProps: defaultVideoProps, 
  sources: ['/assets/video/luxsilver.mp4'],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
      // .61 aspect
    width: 200,
    height: 327
  }
} as MediaBlock