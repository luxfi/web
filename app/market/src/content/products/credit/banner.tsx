import type BannerBlock from '@/blocks/def/banner-block'
import type { LinkDef } from '@hanzo/ui/types'
import video from './video'

export default {
  blockType: 'banner',
  title: 'LUX CREDIT',
  byline: 'Never sell your crypto again.',
  video: {...video, sizing: {vh:50}},
  learnLink: { href: "https://lux.credit", newTab: false } satisfies LinkDef,
  skuPath: 'LXM-CR'
} satisfies BannerBlock
