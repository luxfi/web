import type { CTABlock } from '@hanzo/ui/blocks/def'
import video from './video'

export default {
  blockType: 'banner',
  title: 'LUX SILVER',
  byline: 'The Silver Rush is Here.',
  video: {...video, sizing: { vh: 50}},
  cta: {
    blockType: 'cta',
    specifiers: 'mobile-2-columns',
    elements: [
      {
        title: "Learn More",
        href: "/silver",
        variant: 'outline'
      },
      {
        title: "Buy Now",
        href: "/buy?sku=LXB-AG-B-1-OZ&add=true",
        variant: 'primary'
      },
    ]
  } as CTABlock
}
