import type { TShirtDimensions } from '../dimensions'
import type Block from './block'

interface VideoBlock extends Block {
  blockType: 'video'
  videoProps?: any   // For example,
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      videoProps: {
        autoPlay: true, 
        loop: true, 
        muted: true, 
        playsInline: true
      }, 

      Valueless props are boolean.  
      NOTE: Must be camalCase as per React conventions! (playsinline => playsInline)
    ~~~~~~~~~~~~~~~~~~~~~~~~ */

  poster?: string      
  sources?: string[]
  dim: TShirtDimensions 
  sizing?: any
}

export {
  type VideoBlock as default,
}