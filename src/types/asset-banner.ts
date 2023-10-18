import type NavItem from './nav-item'

/*
videoProps: {
  autoPlay: true, 
  loop: true, 
  muted: true, 
  playsInline: true
}, 

Valueless props are boolean.  All are camalCase as per React conventions! (playsinline => playsInline)
*/

interface AssetBanner {
  title: string
  byline?: string
  media?: {
    type: 'video' | 'image'
    videoProps?: any, // eg, autoplay, as object.  See above
    image?: string, // poster if video 
    sources?: string[]
    dim: { // easier for spread op on props if we have only one.
      width?: number,
      height?: number
    }
  }
  ctas?: NavItem[]
}

export {
  type AssetBanner as default
}
