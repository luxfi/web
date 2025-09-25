import type BannerBlock from '@/blocks/def/banner-block'
import video from './video'

export default {
  blockType: 'banner',
  title: 'LUX KEY',
  byline: `Unlock access to the world of Lux and join the infinite game.`,
  video: {...video, sizing: {vh:50}},
  learnLink: { href: "/key" },
  skuPath: 'LXM-PS'
} satisfies BannerBlock
