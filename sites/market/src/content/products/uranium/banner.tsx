import video from './video'
import modal from './waitlist-modal'

export default {
  blockType: 'banner',
  title: 'LUX URANIUM',
  byline: <>Own digital uranium, <br className='sm:hidden'/>backed by the real thing.</>,
  video: {...video, sizing: { vh: 50 }},
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Learn More",
        href: "/uranium",
        variant: 'outline'
      },
      {
        text: 'Waitlist',
        props: { variant: 'primary' },
        action: {
          type: 'modal',
          def: modal
        }
      },
    ]
  } 
}