import Link from 'next/link'

import type * as C from '@hanzo/ui/blocks'

import type ProductDetailBlock from '@/blocks/def/product-detail-block'

import video from './video'
import accordian from './accordian'
import ProductDetailCTA from '@/components/product-detail-cta'

export default {
  blockType: 'product-detail',
  title: 'LUX VALIDATOR',
  desc: <p>Buy into the <Link href="http://lux.network">Lux Network</Link> in the most meaningful way by becoming a Lux Validator owner and earn <Link href="/coin">LUX Coin</Link> from every network transaction fee.</p>,
  video: {...video, sizing: { vh: 70 }},
  accordian,
  blocks: [{blockType: 'element',
    element: <ProductDetailCTA readMoreUrl='https://lux.network' skuPath='LXM-VL' />
  } satisfies C.ElementBlock as C.Block]
} as ProductDetailBlock

