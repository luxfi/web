import Button from '@/primitives/button'

import media from './video'
import modal from './waitlist-modal'

export default {
  blockType: 'asset-banner',
  title: 'LUX URANIUM',
  byline: 'Own digital uranium, backed by the real thing.',
  media,
  ctas: {
    blockType: 'cta',
    items: [
      {
        title: "Learn More",
        href: "/uranium",
        variant: 'outline'
      },
      {
        component: <Button variant='primary' size='lg'>Waitlist</Button>,
        modal
      },
    ]
  } 
}