import type * as C from '@hanzo/ui/blocks'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'

import video from './video'
import accordian from './accordian'
//import modal from './waitlist-modal'

export default {
  blockType: 'product-detail',
  title: 'LUX CREDIT',
  desc: 'Unlock a world of DeFi with the Lux Credit Card, and spend while saving in the Lux ecosystem.',
  video: {...video, sizing: { vh: 60 }},
  accordian,
  blocks: [
    {
      blockType: 'cta',
      elements: [
        {
          href: 'https://docs.lux.network',
          title: 'Read More',
          external: true,
          newTab: false,
          variant: 'outline'
        },
        {
          title: 'Buy Now',
          href: "https://mint.lux.network/credit/black",
          external: true,
          newTab: false,
        },
      ]
    } as C.CTABlock
  ] as C.Block[]
} as ProductDetailBlock
