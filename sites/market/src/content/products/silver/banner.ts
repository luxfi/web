import type { CTABlock } from '@hanzo/ui/blocks/def'
import video from './video'

export default {
  blockType: 'banner',
  title: 'LUX SILVER',
  byline: 'The Silver Rush is Here.',
  video: {...video, sizing: { vh: 50}},
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Learn More",
        href: "/silver",
        variant: 'outline'
      },
      {
        title: "Buy Now",
        href: "/buy/cat?lev1=AG&lev2=B",
        variant: 'primary'
      },
    ]
  } as CTABlock
}
