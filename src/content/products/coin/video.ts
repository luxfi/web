import { type MediaBlock } from '@/types/blocks'
import { defaultVideoProps } from '@/util'

export default  {
  blockType: 'video',
  videoProps: defaultVideoProps, 
  image: '/assets/video/LUX-COIN-poster.jpg',
  sources: [
    '/assets/video/LUX-COIN-transcode.mp4', 
    '/assets/video/LUX-COIN-transcode.webm'
  ],
    // Determin aspect ration from dims manually...
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    // dims are 546x540, let's cut in half
    // ratio: 1.01

    md: {
      width: 273,
      height: 270
    },

    lg: {
      width: 415,
      height: 410
    }
  }
} as MediaBlock