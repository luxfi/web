import type * as C from '@hanzo/ui/blocks'
import type { LinkDef } from '@hanzo/ui/types'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'

import video from './video'
import accordian from './accordian'

export default {
  blockType: 'product-detail',
  title: 'LUX COIN',
  desc: 'One-time opportunity to get LUX Coin, the deflationary and supply-locked Lux Network currency at pre-launch prices.',
  video: {...video, sizing: { vh: 70}},
  accordian,
  blocks: [{blockType: 'cta',
    specifiers: 'center',
    elements: [
      {title: 'Read more', href: 'https://docs.lux.network', variant: 'outline'} as LinkDef,
      {title: 'Buy Coin', href: 'https://lux.market/coin', external: true, newTab: true, variant: 'primary'} as LinkDef,
    ],
  } satisfies C.CTABlock as C.Block]
} as ProductDetailBlock
