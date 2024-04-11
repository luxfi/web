import type BannerBlock from '@/blocks/def/banner-block'

export default {
  blockType: 'banner',
  title: 'LUX PASS',
  byline: (<>
      FREE priority access to LUX events  <br className='lg:hidden'/>
      and NFT drops.
  </>),
  animation: 'https://prod.spline.design/Itggaf1iI7481mcU/scene.splinecode',
  learnLink: { href: "/pass" },
  skuPath: 'LXM-PS'
} satisfies BannerBlock
