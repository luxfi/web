import { type MediaBlock } from '@/content/types'
import { defaultVideoProps } from '@/util'

export default {
  blockType: 'video',
  videoProps: defaultVideoProps, 
  image: '/assets/video/LUX-URANIUM-1000-LBS-poster.jpg',
  sources: [
    '/assets/video/LUX-URANIUM-1000-LBS-transcode.mp4', 
    '/assets/video/LUX-URANIUM-1000-LBS-transcode.webm'
  ],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
      // 558x596
      // .61 aspect
      // 1 / 2
    width: 279,
    height: 298
    /* 1/4 
    width: 140,
    height: 149,
    */
  }
} as MediaBlock