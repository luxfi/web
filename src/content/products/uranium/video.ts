import { type MediaBlock } from '@/types/block'
import { DEF_VIDEO_PROPS } from '@/util'

export default {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  image: '/assets/video/LUX-URANIUM-1000-LBS-poster.jpg',
  sources: [
    '/assets/video/LUX-URANIUM-1000-LBS-transcode.mp4', 
    '/assets/video/LUX-URANIUM-1000-LBS-transcode.webm'
  ],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
      // 558x596
      // ratio: .936 

    sm: {
            // 1/8 size
      width: 70,
      height: 74
    },

      // 1 / 2
    md: {
      width: 279,
      height: 298
    },

    lg : {
      width: 384,
      height: 410
    }
  }
} as MediaBlock