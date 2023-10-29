import Button from '@/primitives/button'

import media from './video'
import modal from './waitlist-modal'

export default {
  blockType: 'asset-banner',
  title: 'LUX COIN',
  byline: 'Genesis Collection now available on Open Sea.',
  media,
  ctas: {
    blockType: 'cta',
    items: [
      {
        title: "Learn More",
        href: "/coin",
        variant: 'outline'
      },
      {
        component: <Button variant='primary' size='lg'>Waitlist</Button>,
        modal
      },
    ]
  } 
}