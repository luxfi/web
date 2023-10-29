import type * as C from '@/content/types'

import Button from '@/primitives/button'
import ContactDialog from '@/components/contact-dialog'
import saveToListAction from '@/server-actions/save-to-waitlist'

import media from './video'
import accordian from './accordian/accordian'

export default {
  blockType: 'product-detail',
  title: 'LUX VALIDATOR',
  desc: <p>Buy into the <a href="http://lux.network" target="_blank">Lux Network</a> in the most meaningful way by becoming a Lux Validator owner and earn <a href="/coin">LUX Coin</a> from every network transaction fee.</p>,
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
            byline: 'Be the first to get access to LUX Validator.',
            action: saveToListAction,
            actionEnclusure: {
              listId: 3211418,
              reply: "You're on the LUX Validator Whitelist. Join the official LUX telegram to access the drop. https://t.me/luxdefichat"
            }
          }
        },
      ]
    } as C.CTABlock
  ] as C.Block[]
} as C.ProductDetailBlock

