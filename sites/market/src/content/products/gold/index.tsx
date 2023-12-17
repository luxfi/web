import type * as C from '@luxdefi/blocks/def'

import { MiniChart } from '@luxdefi/ui/common'
import { markdown } from '@luxdefi/ui/util'

import ProductDetailBlock from '@/blocks/def/product-detail-block'
import video from './video'
import accordian from './accordian'

export default {
  blockType: 'product-detail',
  title: 'LUX GOLD',
  desc: 'Experience unparalleled access to gold with 1:1 asset-backed Lux Gold NFTs, sovereign ownership of physical gold without management fees, and mine-direct discount pricing.',
  video: {...video, sizing: { vh: 80 }},
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
      video,
    } as C.CardBlock,
    {
      blockType: 'cta',
      elements: [
        {
          title: 'Buy Now',
          href: "https://opensea.io/collection/lux-gold-base-edition",
          external: true,
          newTab: false,
        },
        {
          href: 'https://docs.lux.network',
          title: 'Read More',
          external: true,
          newTab: false,
          variant: 'outline'
        } 
      ]
    } as C.CTABlock,
  ] as C.Block[]
} as ProductDetailBlock


