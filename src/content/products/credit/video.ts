import { type MediaBlock } from '@/content/types'
import { defaultVideoProps } from '@/util'

export default  {
  blockType: 'video',
  videoProps: defaultVideoProps,
  image: '/assets/video/Lux-CARD-poster.jpg',
  sources: [
    '/assets/video/LUX-CARD-transcode.mp4', 
    '/assets/video/LUX-CARD-transcode.webm'
  ],
    // Determin aspect ration from dims manually...
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    // dims are 758x588, let's cut in half
    width: 379,
    height: 294
  }
} as MediaBlock