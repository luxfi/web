import { type CTABlock } from '@hanzo/ui/blocks/def'

import video from './video'

export default {
  blockType: 'banner',
  title: 'LUX GOLD',
  byline: <>Responsibly manufactured, <br className='sm:hidden'/>ethically sourced.</>,
  video: {...video, sizing: { vh: 50}},
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Learn More",
        href: "/gold",
        variant: 'outline'
      },
      {
        title: "Buy Now",
        href: "/buy/cat?lev1=AU&lev2=B",
        external: true,
        newTab: false,
        variant: 'primary'
      },
    ]
  } as CTABlock
}
