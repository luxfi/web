import type * as C from '@hanzo/ui/blocks/def'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'

import video from './video'
import accordian from './accordian'
import buyLink from './buy-link'

export default {
  blockType: 'product-detail',
  title: 'LUX COIN',
  desc: <p>One-time opportunity to get LUX Coin, the deflationary and supply-locked <a href="http://lux.network" target="_blank" >Lux Network</a> currency at pre-launch prices.</p>,
  video: {...video, sizing: { vh: 70}},

  accordian,
  blocks: [
    {
      blockType: 'cta',
      elements: [ 
        buyLink, 
        {
          href: 'https://docs.lux.network',
          title: 'Read More',
          external: true,
          newTab: false,
          variant: 'outline'
        } 
      ]
    } as C.CTABlock
  ]
} as ProductDetailBlock
