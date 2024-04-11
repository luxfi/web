import type * as C from '@hanzo/ui/blocks'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'

import video from './video'
import accordian from './accordian'
import Link from 'next/link'

import ProductDetailCTA from '@/components/product-detail-cta'

export default {
  blockType: 'product-detail',
  title: 'LUX COIN',
  desc: <p>One-time opportunity to get LUX Coin, the deflationary and supply-locked <Link href="http://lux.network">Lux Network</Link> currency at pre-launch prices.</p>,
  video: {...video, sizing: { vh: 70}},
  accordian,
  blocks: [{blockType: 'element',
    element: <ProductDetailCTA readMoreUrl='https://docs.lux.network' skuPath='LXM-CN' />
  } satisfies C.ElementBlock as C.Block]
} as ProductDetailBlock
