import type * as C from '@hanzo/ui/blocks'

import ProductCardContentBlockComponent from '@/blocks/components/products/product-card-content-block'
import finance from './finance'
import funds from './funds'

export default {
  subimage: {
    blockType: 'image',
    src: '/assets/images/icon-arrows-up.png',
    alt: 'arrows up',
    dim: { w: 350, h: 55 },
  } as C.ImageBlock,
  subtitle: {
    blockType: 'element',
    element: (
      <h5>
        <span className='font-heading font-bold'>QUANTUM</span>
        <br />
        <span className='font-heading font-bold'>BRIDGE</span>
      </h5>
    ),
  } as C.ElementBlock,
  products: [
    {
      blockType: 'card',
      content: <ProductCardContentBlockComponent block={finance} />,
    },
    {
      blockType: 'card',
      content: <ProductCardContentBlockComponent block={funds} />,
    },
  ] as C.CardBlock[],
}
