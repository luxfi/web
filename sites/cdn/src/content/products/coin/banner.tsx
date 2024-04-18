import type BannerBlock from '@/blocks/def/banner-block'
import video from './video'

export default {
  blockType: 'banner',
  title: 'LUX COIN',
  byline: <>Genesis Collection now available <br className='sm:hidden' /> on Open Sea.</>,
  video: {...video, sizing: { vh: 50}},
  learnLink: { href: "/coin" },
  skuPath: 'LXM-CN'
} satisfies BannerBlock
