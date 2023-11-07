import Button from '@/primitives/button'

import media from './video'
import modal from './waitlist-modal'

export default    {
  blockType: 'banner',
  title: 'LUX PASS',
  contentBefore: (
    <div className='text-center'>
      FREE priority access to LUX events <br className='md:hidden'/>
      and NFT drops. Priority access to the launch!
    </div>),
  media,
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Learn More",
        href: "/pass",
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