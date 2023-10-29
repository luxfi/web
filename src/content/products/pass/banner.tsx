import Button from '@/primitives/button'

import media from './video'
import modal from './waitlist-modal'

export default    {
  blockType: 'asset-banner',
  title: 'LUX PASS',
  contentBefore: (<>
    <h6>FREE priority access to LUX events and NFT drops.</h6>
    <p>Get priority access to the launch.</p>
  </>),
  media,
  ctas: {
    blockType: 'cta',
    items: [
      {
        title: "Learn More",
        href: "/pass",
        variant: 'outline'
      },
      {
        component: <Button variant='primary' size='lg'>Waitlist</Button>,
        modal
      },
    ]
  }
}