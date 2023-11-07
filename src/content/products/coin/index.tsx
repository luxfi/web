import type * as C from '@/types/block'

import media from './video'
import accordian from './accordian'
import modal from './waitlist-modal'

export default {
  blockType: 'product-detail',
  title: 'LUX COIN',
  desc: <p>One-time opportunity to get LUX Coin, the deflationary and supply-locked <a href="http://lux.network" target="_blank" >Lux Network</a> currency at pre-launch prices.</p>,
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
          },
          action: {
            type: 'modal',
            def: modal
          }
        },
      ]
    } as C.CTABlock
  ]
} as C.ProductDetailBlock
