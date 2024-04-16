import type BannerBlock from '@/blocks/def/banner-block'

export default {
  blockType: 'banner',
  title: 'LUX KEY',
  byline: (<>
      FREE priority access to LUX events  <br className='lg:hidden'/>
      and NFT drops.
  </>),
  animation: 'https://prod.spline.design/Itggaf1iI7481mcU/scene.splinecode',
  learnLink: { href: "/key" },
  skuPath: 'LXM-PS'
} satisfies BannerBlock
