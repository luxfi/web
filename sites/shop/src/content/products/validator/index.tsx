import Link from 'next/link'

import type * as C from '@hanzo/ui/blocks'
import { BuyItemButton } from '@hanzo/commerce'

import type ProductDetailBlock from '@/blocks/def/product-detail-block'

import video from './video'
import accordian from './accordian'

export default {
  blockType: 'product-detail',
  title: 'LUX VALIDATOR',
  desc: <p>Buy into the <Link href="http://lux.network">Lux Network</Link> in the most meaningful way by becoming a Lux Validator owner and earn <Link href="/coin">LUX Coin</Link> from every network transaction fee.</p>,
  video: {...video, sizing: { vh: 70 }},
  accordian,
  blocks: [
    {blockType: 'cta',
      elements: [{
          href: 'https://lux.network',
          title: 'Read More',
          newTab: false,
          variant: 'outline'
        }]
    } as C.CTABlock,
    {blockType: 'element',
      element: <div className='flex flex-col justify-center items-center gap-8'>
        <BuyItemButton skuPath='LXM-VL' popupClx='w-[340px]' className='lg:min-w-pr-65 min-w-pr-65'>Buy</BuyItemButton>
      </div>,
    } satisfies C.ElementBlock as C.Block,
      ] as C.Block[]
} as ProductDetailBlock

