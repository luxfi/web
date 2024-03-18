import type BannerBlock from '@/blocks/def/banner-block'
import video from './video'

export default {
  blockType: 'banner',
  title: 'LUX CREDIT',
  byline: 'Never sell your crypto again.',
  video: {...video, sizing: { vh: 50}},
  learnLink: { href: "https://lux.credit" },
  skuPath: 'LXM-CR'
} satisfies BannerBlock
