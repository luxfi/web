import type BannerBlock from '@/blocks/def/banner-block'
import video from './video'

export default {
  blockType: 'banner',
  title: 'LUX GOLD',
  byline: <>Responsibly manufactured, <br className='sm:hidden'/>ethically sourced.</>,
  video: {...video, sizing: { vh: 50}},
  learnLink: { href: "/gold" },
  skuPath: 'LXM-AU'
} satisfies BannerBlock
