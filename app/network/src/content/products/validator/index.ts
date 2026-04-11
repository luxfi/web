import type * as C from '@hanzo/ui/blocks'
import type { LinkDef } from '@hanzo/ui/types'

import type ProductDetailBlock from '@/blocks/def/product-detail-block'

import video from './video'
import accordian from './accordian'

export default {
  blockType: 'product-detail',
  title: 'LUX VALIDATOR',
  desc: 'Buy into the Lux Network in the most meaningful way by becoming a Lux Validator owner and earn LUX Coin from every network transaction fee.',
  video: {...video, sizing: { vh: 70 }},
  accordian,
  blocks: [{blockType: 'cta',
    specifiers: 'center',
    elements: [
      {title: 'Read more', href: 'https://lux.network', variant: 'outline'} as LinkDef,
      {title: 'Buy Validator', href: 'https://lux.market/validator', external: true, newTab: true, variant: 'primary'} as LinkDef,
    ],
  } satisfies C.CTABlock as C.Block]
} as ProductDetailBlock
