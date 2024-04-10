import type BannerBlock from '@/blocks/def/banner-block'
import type { LinkDef } from '@hanzo/ui/types'

export default {
  blockType: 'banner',
  title: 'LUX CREDIT',
  byline: 'Never sell your crypto again.',
  animation: 'https://prod.spline.design/ECUOH40K2iVPcLvn/scene.splinecode',
  learnLink: { href: "https://lux.credit", newTab: false } satisfies LinkDef,
  skuPath: 'LXM-CR'
} satisfies BannerBlock
