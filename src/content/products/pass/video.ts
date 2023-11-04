import { type MediaBlock } from '@/types/blocks'
import { defaultVideoProps } from '@/util'

export default  {
  blockType: 'video',
  videoProps: defaultVideoProps,
  image: '/assets/video/Lux-PASS-poster.jpg',
  sources: [
    '/assets/video/LUX-PASS-transcode.mp4', 
    '/assets/video/LUX-PASS-transcode.webm'
  ],
    // Determin aspect ration from dims manually...
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    // dims are 658x720, let's cut in half
    width: 329,
    height: 360
  }
} as MediaBlock