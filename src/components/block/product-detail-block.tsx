'use client'

import React from 'react'

import ApplyTypography from '@/primitives/apply-typography'

import type ProductDetailBlock from '@/content/types/product-detail-block'
import MediaBlockComponent from './media-block'
import AccordianBlockComponent from './accordian-block'
import { StandardCard } from './card-block'
import BlockRenderer from './block-renderer'

const Spacer: React.FC = () => (
  <p className='invisible m-0 h-[1px]'>&nbsp;</p>
)

/* md:absolute  md:left-0 md:top-px-50 md:z-10 md:bg-background   */
const ProductDetailBlockComponent: React.FC<{
  product: ProductDetailBlock
}> = ({
  product: p
}) => (
  <>
  <div className='max-w-[1100px] flex flex-col justify-start items-stretch p-4 md:flex-row md:gap-8'>
    <div className='mb-12 md:min-w-[400px] md:w-1/2 md:mt-60'>
      <MediaBlockComponent media={p.media} className='mx-auto'/>
    </div>
    <div className='md:bg-scroll md:w-1/2 md:pt-20'>
      <ApplyTypography className='flex flex-col items-start'>
        <h1 className='mb-8'>{p.title}</h1>
        {p.desc && (
          (typeof p.desc === 'string') ? (<p>{p.desc}</p>) : ('element' in p.desc ? p.desc.element : p.desc)
        )}
        <AccordianBlockComponent accordian={p.accordian} className='mt-5'/>
        {p.price && (<>
          <Spacer />
          <h3>{p.price.heading}</h3>
          <div className='flex flex-col justify-start items-stretch self-stretch md:self-center md:grid md:grid-cols-2 gap-4 '>
            <StandardCard card={p.price.priceCard} />
            <StandardCard card={p.price.msCard} />
          </div>
        </>)}
        <Spacer />
        {p.blocks?.map((block, index) => {
          if (block.blockType === 'cta') {
            return (
              <div className='grid grid-cols-1 gap-2 self-stretch md:flex md:flex-row md:justify-center' key={index}>
                <BlockRenderer block={block} />
              </div>
            )
          }
          return <BlockRenderer block={block} key={index}/>
        })}
      </ApplyTypography>
    </div>
  </div>
  </>
)

export default ProductDetailBlockComponent
