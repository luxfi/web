import type ProductDetailBlock from '@/content/types/product-detail-block'
import media from './video'
import LuxStandardMDX from './accordian/lux-standard-guar-backing.mdx'

export default {
  blockType: 'product-detail',
  title: 'LUX SILVER',
  desc: 'Get unprecedented access to silver with 1:1 asset-backed Lux Silver NFTs, sovereign ownership of physical silver without management fees, and mine-direct discount pricing.',
  media,
  accordian: {
    blockType: 'accordian',
    items: [
      {
        trigger: 'Direct Ownership of Silver',
        content: "Each Lux Silver NFT is 1:1 backed by audit verified physical silver deposits under an exclusive agreement with publicly traded Viscount Mining Co. of Canada – see the Lux Standard for more."
      },
      {
        trigger: 'Lux Standard Guaranteed Backing',
        content: <LuxStandardMDX />
      },
    ]
  }
} as ProductDetailBlock