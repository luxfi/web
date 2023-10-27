import React from 'react'

import ApplyTypography from '@/primitives/apply-typography'

import type ProductDetailBlock from '@/content/types/product-detail-block'
import MediaBlockComponent from './media-block'
import AccordianBlockComponent from './accordian-block'
import { StandardCard } from './card-block'

const Spacer: React.FC = () => (
  <h3 className='invisible'>&nbsp;</h3>
)

const ProductDetailBlockComponent: React.FC<{
  product: ProductDetailBlock
}> = ({
  product: p
}) => (
  <>
  <div className='relative flex flex-col justify-start items-center p-4 md:flex-row md:gap-8'>
    <div className='mb-12 md:z-10 md:bg-background md:absolute md:min-w-[400px] md:h-screen md:left-0 md:top-px-50 md:w-1/3'>
      <MediaBlockComponent media={p.media} />
    </div>
    <div className='md:bg-scroll'>
      <ApplyTypography>
        <h1 className='mb-8'>{p.title}</h1>
        {p.desc && (
          (typeof p.desc === 'string') ? (
            <p>{p.desc}</p>
          ) : p.desc.element 
        )}
        <AccordianBlockComponent accordian={p.accordian} className='mt-10'/>
        <Spacer />
        <h3>{p.price.heading}</h3>
        <div>
          <StandardCard card={p.price.priceCard} />
        </div>
      </ApplyTypography>
    </div>
  </div>
  </>
)

export default ProductDetailBlockComponent
