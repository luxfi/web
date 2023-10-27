import React from 'react'

import ApplyTypography from '@/primitives/apply-typography'

import type ProductDetailBlock from '@/content/types/product-detail-block'
import MediaBlockComponent from './media-block'
import AccordianBlockComponent from './accordian-block'

const ProductDetailBlockComponent: React.FC<{
  product: ProductDetailBlock
}> = ({
  product
}) => (
  <>
  <div className='relative flex flex-col justify-start items-center p-4 md:flex-row md:gap-8'>
    <div className='mb-12 md:z-10 md:bg-background md:absolute md:min-w-[400px] md:h-screen md:left-0 md:top-px-50 md:w-1/3'>
      <MediaBlockComponent media={product.media} />
    </div>
    <div className='md:bg-scroll'>
      <ApplyTypography>
        <h1 className='mb-8'>{product.title}</h1>
        {(typeof product.desc === 'string') ? (
          <p>{product.desc}</p>
        ) : product.desc!.element }
        <AccordianBlockComponent accordian={product.accordian} className='mt-10'/>
      </ApplyTypography>
    </div>
  </div>
  </>
)

export default ProductDetailBlockComponent
