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
        href: "https://mint.lux.network/silver",
        external: true,
        newTab: false,
        variant: 'primary'
      },
    ]
  } as CTABlock
}
