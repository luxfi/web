import type Block from './block'

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
  dim: {               // easier for spread op on props if we have only one.
    width?: number,
    height?: number
  }
}

export {
  type MediaBlock as default
}