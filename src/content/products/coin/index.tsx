import type * as C from '@/content/types'

import Button from '@/primitives/button'
import ContactDialog from '@/components/contact-dialog'
import saveToListAction from '@/server-actions/save-to-waitlist'


import media from './video'
import accordian from './accordian/accordian'

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
          component: <Button className='w-full -mt-8 md:-mt-16' variant='primary' size='lg'>Waitlist</Button>,
          modal: {
            Comp: ContactDialog,
            title: 'Join the Waitlist',
            byline: 'Be the first to own LUX Coin',
            action: saveToListAction,
            actionEnclusure: {
              listId: 3211420,
              reply: "You're on the LUX Coin Whitelist. Join the official LUX telegram to access the drop. https://t.me/luxdefichat"
            }
          }
        },
      ]
    } as C.CTABlock
  ]
} as C.ProductDetailBlock
