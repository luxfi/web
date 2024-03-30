import type * as C from '@hanzo/ui/blocks'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'

import video from './video'
import accordian from './accordian'
import Link from 'next/link'

import { BuyButton } from '@hanzo/commerce'

export default {
  blockType: 'product-detail',
  title: 'LUX COIN',
  desc: <p>One-time opportunity to get LUX Coin, the deflationary and supply-locked <Link href="http://lux.network">Lux Network</Link> currency at pre-launch prices.</p>,
  video: {...video, sizing: { vh: 70}},
  accordian,
  blocks: [
    {blockType: 'cta',
      elements: [{
          href: 'https://docs.lux.network',
          title: 'Read More',
          newTab: false,
          variant: 'outline'
      }]
    } satisfies C.CTABlock as C.Block,
    {blockType: 'element', element: (
      <div className='flex flex-col justify-center items-center gap-8'>
        <BuyButton skuPath='LXM-CN' className='lg:min-w-pr-65 min-w-pr-65'>Buy</BuyButton>
      </div>
    )} satisfies C.ElementBlock as C.Block,
  ]
} as ProductDetailBlock
