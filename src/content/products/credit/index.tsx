import type * as C from '@/content/types'

import Button from '@/primitives/button'

import media from './video'
import accordian from './accordian'
import modal from './waitlist-modal'

export default {
  blockType: 'product-detail',
  title: 'LUX CREDIT',
  desc: 'Set your credit limit instantly with staking and borrow up to 50% of this amount while earning an industry leading APY on your staked amount and earning crypto rewards on purchases.',
  media,
  accordian,
  blocks: [
    {
      blockType: 'cta',
      items: [
        {
          component: <Button className='w-full -mt-8 md:-mt-16' variant='primary' size='lg'>Waitlist</Button>,
          modal 
        }
      ]
    } as C.CTABlock
  ] as C.Block[]
} as C.ProductDetailBlock
