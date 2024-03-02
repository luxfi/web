import type * as C from '@hanzo/ui/blocks/def'

import { MiniChart } from '@hanzo/ui/common'
import { markdown } from '@hanzo/ui/util'

import { formatPrice, bullionPrice1oz } from '@/util'

import type ProductDetailBlock from '@/blocks/def/product-detail-block'
import video from './video'
import accordian from './accordian'

export default {
  blockType: 'product-detail',
  title: 'LUX GOLD',
  desc: "Forge your connection to the real world with Lux Gold, crafted with excellence in Dubai. This extraordinary digital collectable is more than a token, —it's the future of hyper-liquid real-world assets. Lux Gold is a embodiment of timeless wealth, prestige, and the synthesis of tradition and innovation. Fully redeemable for physical gold, Lux Gold goes beyond traditional ownership to where gold's timelessness meets the dynamic opportunities of the digital era. It's a seamless gateway where digital ownership evolves into physical reality, enabling any cryptocurrency to fluently be transmuted to gold, and even earn additional yield by lending and providing liquidity in DeFi.",
  video: {...video, sizing: { vh: 80 }},
  accordian,
  price: {
    heading: 'Price',
    priceCard: {
      blockType: 'card',
      title: 'Lux Gold Price / Oz',
      content: <h4>{formatPrice(bullionPrice1oz('au'), true)}</h4>,
      cta: {
        blockType: 'cta',
        elements: [
          {
            title: "Buy Now",
            href: "/buy?sku=LXB-AU-B-1-OZ&add=true",
            size: 'default',
            variant: 'primary',
          },
        ]
      } as C.CTABlock, 
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
          href: "https://mint.lux.network/gold",
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


