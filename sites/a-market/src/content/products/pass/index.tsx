import type * as C from '@hanzo/ui/blocks/def'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'

import video from './video'
import accordian from './accordian'
import modal from './waitlist-modal'

export default {
  blockType: 'product-detail',
  title: 'LUX PASS',
  desc: 'Mint Lux Pass to get first access to future launches and events, and get 1,000 LUX Coins as a gift in a new Lux Wallet – for just $1',
  video: {...video, sizing: { vh: 70 }},
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
          },
          action: {
            type: 'modal',
            def: modal
          }
        },
      ]
    } as C.CTABlock
  ] as C.Block[]
} as ProductDetailBlock
