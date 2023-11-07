import media from './video'
import modal from './waitlist-modal'

export default {
  blockType: 'banner',
  title: 'LUX COIN',
  byline: <>Genesis Collection now available <br className='sm:hidden' /> on Open Sea.</>,
  media,
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Learn More",
        href: "/coin",
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