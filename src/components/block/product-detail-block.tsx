import React from 'react'

import ApplyTypography from '@/primitives/apply-typography'

import type ProductDetailBlock from '@/types/blocks/product-detail-block'
import MediaBlockComponent from './media-block'
import AccordianBlockComponent from './accordian-block'
import { StandardCard } from './card-block'
import BlockRenderer from './block-renderer'

const Spacer: React.FC = () => (
  <p className='invisible m-0 h-[1px]'>&nbsp;</p> // allow the surround vertical gaps to create the spacer effect
)

const ProductDetailBlockComponent: React.FC<{
  product: ProductDetailBlock
}> = ({
  product: p
}) => (<>
  <div className='mb-12 md:min-w-[400px] md:w-1/2 md:mt-[150px] md:static'>
    <MediaBlockComponent media={p.media} size='lg' className='md:sticky top-[250px] mt-[16px] mx-auto'/>
  </div>
  <div className='md:bg-scroll md:w-1/2 md:pt-[170px]'>
    <ApplyTypography className='flex flex-col items-start md:w-[555px]'>
      <h2 className='mb-8'>{p.title}</h2>
      {p.desc && (
        (typeof p.desc === 'string') ? (<p>{p.desc}</p>) : ('element' in p.desc ? p.desc.element : p.desc)
      )}
      <AccordianBlockComponent accordian={p.accordian} className='mt-5'/>
      {p.price && (<>
        <Spacer />
        <h3>{p.price.heading}</h3>
        <div className='flex flex-col justify-start items-stretch self-stretch w-full md:self-center md:grid md:grid-cols-2 gap-4 '>
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
      <Spacer />
    </ApplyTypography>
  </div>
</>)

export default ProductDetailBlockComponent
