import Button from '@/primitives/button'

import media from './video'
import modal from './waitlist-modal'

export default{
  blockType: 'asset-banner',
  title: 'LUX CREDIT',
  byline: 'Never sell your crypto again.',
  media,
  ctas: {
    blockType: 'cta',
    items: [
      {
        title: "Learn More",
        href: "/credit",
        variant: 'outline'
      },
      {
        component: <Button variant='primary' size='default' className='w-1/2'>Waitlist</Button>,
        modal
      },
    ]
  }
}