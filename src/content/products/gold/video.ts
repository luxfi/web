import { type MediaBlock } from '@/types/blocks'
import { defaultVideoProps } from '@/util'

export default  {
  blockType: 'video',
  videoProps: defaultVideoProps, 
  sources: ['/assets/video/luxgold.mp4'],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
      // .67 ar
    width: 219,
    height: 327
  }
} as MediaBlock