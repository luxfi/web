import media from './video'
import modal from './waitlist-modal'

export default {
  blockType: 'asset-banner',
  title: 'LUX URANIUM',
  byline: <>Own digital uranium, <br className='sm:hidden'/>backed by the real thing.</>,
  media,
  cta: {
    blockType: 'cta',
    items: [
      {
        title: "Learn More",
        href: "/uranium",
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