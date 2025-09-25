import type { VideoBlock } from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxfi/data'

export default {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: 'https://cdn.lux.network/commerce/uranium/product/LUX-URANIUM-1000-LBS-poster.jpg',
  sources: [
    'https://cdn.lux.network/commerce/uranium/product/LUX-URANIUM-1000-LBS-transcode.mp4', 
    'https://cdn.lux.network/commerce/uranium/product/LUX-URANIUM-1000-LBS-transcode.webm'
  ],
    // From manually looking at aspect ratio
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
      // 558x596
      // ratio: .936 

    sm: {
            // 1/8 size
      w: 70,
      h: 74
    },

      // 1 / 2
    md: {
      w: 279,
      h: 298
    },

    lg : {
      w: 384,
      h: 410
    }
  }
} as VideoBlock