import video from './video'
import modal from './waitlist-modal'

export default    {
  blockType: 'banner',
  title: 'LUX PASS',
  byline: (<>
      FREE priority access to LUX events  <br className='lg:hidden'/>
      and NFT drops.
  </>),
  video: {...video, sizing: { vh: 50}},
  cta: {
    blockType: 'cta',
    specifiers: 'mobile-2-columns',
    elements: [
      {
        title: "Learn More",
        href: "/pass",
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