import type * as C from '@/types/blocks'

import media from './video'
import accordian from './accordian'
import modal from './waitlist-modal'

export default {
  blockType: 'product-detail',
  title: 'LUX CREDIT',
  desc: 'Unlock a world of digital assets with the Lux Card, your gateway to seamless transactions and asset management in the Lux ecosystem.',
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
