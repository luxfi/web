import video from './video'
import { CTABlock } from '@/types/block'

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
        href: "https://lux.town",
        external: true,
        newTab: false,
        variant: 'primary'
      },
    ]
  } as CTABlock
}