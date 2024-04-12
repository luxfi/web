import type * as C from '@hanzo/ui/blocks'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'

import video from './video'
import accordian from './accordian'
import Link from 'next/link'
import ProductCTA from '@/components/product-cta'

export default {
  blockType: 'product-detail',
  title: 'LUX COIN',
  desc: <p>One-time opportunity to get LUX Coin, the deflationary and supply-locked <Link href="http://lux.network">Lux Network</Link> currency at pre-launch prices.</p>,
  video: {...video, sizing: { vh: 70}},
  accordian,
  blocks: [{blockType: 'element',
    element: <ProductCTA learnMoreText='Read more' learnMoreUrl='https://docs.lux.network' skuPath='LXM-CN' />
  } satisfies C.ElementBlock as C.Block]
} as ProductDetailBlock
