import type * as C from '@/content/types'

import Button from '@/primitives/button'

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
      items: [
        {
          component: <Button className='w-full -mt-8 md:-mt-16' variant='primary' size='lg'>Waitlist</Button>,
          modal 
        }
      ]
    } as C.CTABlock
  ] as C.Block[]
} as C.ProductDetailBlock
