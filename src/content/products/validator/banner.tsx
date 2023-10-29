import Button from '@/primitives/button'

import media from './video'
import modal from './waitlist-modal'

export default {
  blockType: 'asset-banner',
  title: 'LUX VALIDATOR',
  byline: 'Run the chain.',
  media,
  ctas: {
    blockType: 'cta',
    items: [
      {
        title: "Learn More",
        href: "/validator",
        variant: 'outline'
      },
      {
        component: <Button variant='primary' size='lg'>Waitlist</Button>,
        modal
      },
    ]
  }
}
