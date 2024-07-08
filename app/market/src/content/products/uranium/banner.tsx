import type BannerBlock from '@/blocks/def/banner-block'
import video from './video'

export default {
  blockType: 'banner',
  title: 'LUX URANIUM',
  byline: <>Own digital uranium, <br className='sm:hidden'/>backed by the real thing.</>,
  video: {...video, sizing: { vh: 50 }},
  learnLink: { href: "/uranium" },
} satisfies BannerBlock
