import type BannerBlock from '@/blocks/def/banner-block'
import video from './video'

export default {
  blockType: 'banner',
  title: 'LUX VALIDATOR',
  byline: 'Run the chain.',
  video: {...video, sizing: { vh: 50}},
  learnLink: { href: "/validator" },
  skuPath: 'LXM-VL'
} satisfies BannerBlock
