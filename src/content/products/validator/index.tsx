import type * as C from '@/content/types'

import Button from '@/primitives/button'

import media from './video'
import accordian from './accordian'
import modal from './waitlist-modal'

export default {
  blockType: 'product-detail',
  title: 'LUX VALIDATOR',
  desc: <p>Buy into the <a href="http://lux.network" target="_blank">Lux Network</a> in the most meaningful way by becoming a Lux Validator owner and earn <a href="/coin">LUX Coin</a> from every network transaction fee.</p>,
  media,
  accordian,
  blocks: [
    {
      blockType: 'cta',
      items: [{
        component: <Button className='w-full -mt-2' variant='primary' size='lg'>Waitlist</Button>,
        modal,
      }]
    } as C.CTABlock
  ] as C.Block[]
} as C.ProductDetailBlock

