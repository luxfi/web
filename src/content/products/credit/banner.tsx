import Button from '@/primitives/button'

import media from './video'
import modal from './waitlist-modal'

export default{
  blockType: 'banner',
  title: 'LUX CREDIT',
  byline: 'Never sell your crypto again.',
  media,
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Learn More",
        href: "/credit",
        variant: 'outline'
      },
      {
        text: 'Waitlist',
        props: {
          variant: 'primary',
          size: 'default', 
          className: 'w-1/2'  
        },
        action: {
          type: 'modal',
          def: modal
        }
      },
    ]
  }
}