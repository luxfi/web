import type * as C from '@/types/blocks'

import media from './video'
import accordian from './accordian'
import modal from './waitlist-modal'

export default {
  blockType: 'product-detail',
  title: 'LUX PASS',
  desc: 'Mint Lux Pass to get first access to future launches and events, and get 1,000 LUX Coins as a gift in a new Lux Wallet – for just $1',
  media,
  accordian,
  blocks: [
    {
      blockType: 'cta',
      elements: [
        {
          text: 'Waitlist',
          props: {
            variant: 'primary',
            size: 'lg', 
            className: 'w-full -mt-2'  
          },
          action: {
            type: 'modal',
            def: modal
          }
        },
      ]
    } as C.CTABlock
  ] as C.Block[]
} as C.ProductDetailBlock
