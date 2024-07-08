import type * as C from '@hanzo/ui/blocks'

import ProductCardContentBlockComponent from '@/blocks/components/products/product-card-content-block'
import cefi from './cefi'
import defi from './defi'

export default {
  subimage: {
    blockType: 'image',
    src: '/assets/images/transparent.gif',
    alt: 'arrows up',
    dim: { w: 350, h: 55 },
  } as C.ImageBlock,
  subtitle: {
    blockType: 'element',
    element: (<></>),
  } as C.ElementBlock,
  products: [
    {
      blockType: 'card',
      content: <ProductCardContentBlockComponent block={cefi} />,
    },
    {
      blockType: 'card',
      content: <ProductCardContentBlockComponent block={defi} />,
    },
  ] as C.CardBlock[],
}
