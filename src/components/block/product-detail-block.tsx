import React from 'react'

import { type TShirtSize } from '@/types'
import type { Block, ProductDetailBlock} from '@/types/block'

import ApplyTypography from '@/primitives/apply-typography'

import MediaBlockComponent from './media-block'
import AccordianBlockComponent from './accordian-block'
import CardComponent  from './card-block'
import BlockFactory from './block-factory'
import Spacer from './space-block'

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
      <MediaBlockComponent block={p.media} size={videoSize} className='md:sticky md:top-[200px] lg:top-[300px] md:mt-0 mt-[16px] mx-auto'/>
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
        {p.blocks?.map((block, index) => {
          if (block.blockType === 'cta') {
            return (
              <div className='flex flex-col items-stretch gap-2 self-stretch sm:flex-row sm:justify-center' key={index}>
                <BlockFactory block={block} />
              </div>
            )
          }
          else if (block.blockType === 'heading' || block.blockType === 'space' ) {
            return (
              <ApplyTypography key={index}>
                <BlockFactory block={block} />
              </ApplyTypography>
            )
          }
          return <BlockFactory block={block} key={index}/>
        })}
        <Spacer />
      </div>
    </div>
  </>)
}

export default ProductDetailBlockComponent
