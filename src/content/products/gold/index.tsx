import type * as C from '@/types/block'

import MiniChart from '@/components/mini-chart'

import media from './video'
import accordian from './accordian'
import { markdown } from '@/util'

export default {
  blockType: 'product-detail',
  title: 'LUX GOLD',
  desc: 'Experience unparalleled access to gold with 1:1 asset-backed Lux Gold NFTs, sovereign ownership of physical gold without management fees, and mine-direct discount pricing.',
  media,
  accordian,
  price: {
    heading: 'Price',
    priceCard: {
      blockType: 'card',
      title: 'Lux Gold Price / Oz',
      content: <h4>USD 2000</h4>,
    },
    msCard: {
      blockType: 'card',
      specifiers: 'full-width',
      title: 'Market Spot Price / Oz',
      content: <MiniChart symbol='GOLD' /> 
    }
  },
  blocks: [
    {
      blockType: 'heading',
      heading: 'Editions'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      specifiers: 'media-left content-left heading-style-title',
      title: 'NEXT MINT',
      content: markdown(`
Available: 1,000,100 oz<br/>
Price: $2000 / oz<br/>
Spot price:: ~$2050 / oz
      `),
      media,
    } as C.CardBlock,
    {
      blockType: 'cta',
      elements: [{
        title: 'Buy Now',
        href: '/', // TODO
        variant: 'primary',
        size: 'lg'
      }]
    } as C.CTABlock,
  ] as C.Block[]
} as C.ProductDetailBlock
