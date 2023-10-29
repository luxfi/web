import type * as C from '@/content/types'

import Button from '@/primitives/button'
import ContactDialog from '@/components/contact-dialog'
import saveToListAction from '@/server-actions/save-to-waitlist'

import media from './video'
import accordian from './accordian/accordian'

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
          modal: {
            Comp: ContactDialog,
            title: 'Join the Waitlist',
            byline: 'Be the first to get access to LUX Credit.',
            action: saveToListAction,
            actionEnclusure: {
              listId: 33211417,
              reply: "You're on the LUX Credit Whitelist. Join the official LUX telegram to access thedrop. https://t.me/luxdefichat"
            }
          }
        }
      ]
    } as C.CTABlock
  ] as C.Block[]
} as C.ProductDetailBlock
