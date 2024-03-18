import type BannerBlock from '@/blocks/def/banner-block'
import video from './video'

export default    {
  blockType: 'banner',
  title: 'LUX PASS',
  byline: (<>
      FREE priority access to LUX events  <br className='lg:hidden'/>
      and NFT drops.
  </>),
  video: {...video, sizing: { vh: 50}},
  learnLink: { href: "/pass" },
  skuPath: 'LXM-PS'
} satisfies BannerBlock
