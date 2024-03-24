import type * as C from '@hanzo/ui/blocks'

import type ProductDetailBlock from '@/blocks/def/product-detail-block'
import { BuyItemButton } from '@hanzo/commerce'

import video from './video'
import accordian from './accordian'
import modal from './waitlist-modal'

const desc = 'Acquire a Lux Pass and ensure access to the Lux Network’s most sought-after events and launches. Start your journey with 1,000,000 LUX Coins, offering a future woven with thrilling experiences and adventures that redefine extraordinary.'

export default {
  blockType: 'product-detail',
  title: 'LUX PASS',
  desc,
  video: {...video, sizing: { vh: 70 }},
  accordian,
  blocks: [{blockType: 'element',
    element: (
      <div className='h-full w-full flex  flex-col justify-center items-center gap-8  '>
        <BuyItemButton skuPath='LXM-PS' popupClx='w-[340px] ' className='lg:min-w-pr-65 min-w-pr-65 mx-auto'>Buy</BuyItemButton>
      </div>
    )
  } satisfies C.ElementBlock as C.Block] 
} satisfies ProductDetailBlock
