import type * as C from '@luxdefi/ui/blocks/def'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'

import video from './video'
import accordian from './accordian'
import buyLink from './buy-link'

export default {
  blockType: 'product-detail',
  title: 'LUX VALIDATOR',
  desc: <p>Buy into the <a href="http://lux.network" target="_blank">Lux Network</a> in the most meaningful way by becoming a Lux Validator owner and earn <a href="/coin">LUX Coin</a> from every network transaction fee.</p>,
  video: {...video, sizing: { vh: 70 }},
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
  ] as C.Block[]
} as ProductDetailBlock

