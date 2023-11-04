import type * as C from '@/types/blocks'

import Button from '@/primitives/button'


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
      items: [
        {
          component: <Button className='w-full -mt-2' variant='primary' size='lg'>Waitlist</Button>,
          modal,
        },
      ]
    } as C.CTABlock
  ]
} as C.ProductDetailBlock
