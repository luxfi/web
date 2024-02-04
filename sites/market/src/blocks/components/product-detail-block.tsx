import React from 'react'

import { type TShirtSize } from '@luxdefi/ui/types'
import type { Block} from '@luxdefi/ui/blocks/def'
import { ApplyTypography } from '@luxdefi/ui/primitives'

import {
  ContentComponent,
  SpaceBlockComponent as Spacer,
  CardBlockComponent as CardComponent,
  AccordianBlockComponent,
  VideoBlockComponent,
  BlocksComponent
} from '@luxdefi/ui/blocks'

import type ProductDetailBlock from '@/blocks/def/product-detail-block'

const ProductDetailBlockComponent: React.FC<{
  block: Block
  videoSize?: TShirtSize
}> = ({
  block,
  videoSize='lg'
}) => {

  if (block.blockType !== 'product-detail') {
    return <>product detail block required</>
  }
  const p = block as ProductDetailBlock

  return (<>
    <div className='mb-12 md:min-w-[400px] md:w-1/2 md:static'>
      <VideoBlockComponent block={p.video} size={videoSize} className='md:sticky md:top-[80px] md:mt-0 mt-[16px] mx-auto'/>
    </div>
    <div className='md:bg-scroll md:w-1/2 '>
      <div className='md:max-w-[555px] flex flex-col items-start gap-4' >
        <ApplyTypography className='flex flex-col justify-start items-start typography-headings:text-left'>
          <h1 className='text-left'>{p.title}</h1>
          {p.desc && (
            (typeof p.desc === 'string') ? (<h6>{p.desc}</h6>) : ('element' in p.desc ? p.desc.element : p.desc)
          )}
        </ApplyTypography>
        <AccordianBlockComponent block={p.accordian} className='mt-5'/>
        {p.price && (<>
          <Spacer />
          <ApplyTypography >
            <h3>{p.price.heading}</h3>
          </ApplyTypography>
          <div className='flex flex-col justify-start items-stretch self-stretch w-full lg:self-center lg:grid lg:grid-cols-2 gap-4 '>
            <CardComponent block={p.price.priceCard} />
            <CardComponent block={p.price.msCard} />
          </div>
        </>)}
        <Spacer />
        <ContentComponent blocks={p.blocks} />
        <Spacer />
      </div>
    </div>
  </>)
}

export default ProductDetailBlockComponent
