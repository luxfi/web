import type Block from './block'


type VideoDimensions = {               
  sm?: {
    width: number,
    height: number
  }, 

  md: {
    width: number,
    height: number
  }, 

  lg: {
    width: number,
    height: number
  } 
}

type ImageDimensions = {
  width: number,
  height: number
}

interface MediaBlock extends Block {
  blockType: 'video' | 'image'
  videoProps?: any,   // For example,
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

  image?: string,      // if image, image url. poster image if video 
  sources?: string[]
  dim: VideoDimensions | ImageDimensions 
}

export {
  type MediaBlock as default,
  type VideoDimensions,
  type ImageDimensions 
}