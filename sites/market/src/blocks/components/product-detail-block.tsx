import React from 'react'

import { ApplyTypography } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import {
  type BlockComponentProps,
  ContentComponent,
  SpaceBlockComponent,
  CardBlockComponent as CardComponent,
  AccordianBlockComponent,
  VideoBlockComponent,
} from '@hanzo/ui/blocks'

import type ProductDetailBlock from '@/blocks/def/product-detail-block'

const Spacer: React.FC = () => (
  <SpaceBlockComponent block={{blockType: 'space'}} />
)

const ProductDetailBlockComponent: React.FC<BlockComponentProps> = ({
  agent,
  block,
}) => {

  if (block.blockType !== 'product-detail') {
    return <>product detail block required</>
  }
  const p = block as ProductDetailBlock

  const videoSize = (agent === 'phone') ? 'md' : 'lg'
  const mobile = (agent === 'phone')


  const TitleArea: React.FC<{className?: string}> = ({
    className=''
  }) => {

    return (
        <ApplyTypography className={cn('typography-headings:text-left', className)}>
          <h1 className='text-left'>{p.title}</h1>
          {p.desc && (typeof p.desc === 'string') ? (
              <h6>{p.desc}</h6>
            ) : (
              p.desc
            )
          }
        </ApplyTypography>
    )
  }


  return (<>
    {mobile ? (<></>) : (
      <div className='mb-12 md:min-w-[400px] md:w-1/2 md:static'>
        <VideoBlockComponent block={p.video} size={videoSize} className='md:sticky md:top-[80px] md:mt-0 mt-[16px] mx-auto'/>
      </div>
    )}
    <div className='md:bg-scroll md:w-1/2 '>
      <div className='md:max-w-[555px] flex flex-col items-start gap-4' >
        <TitleArea className='flex flex-col justify-start items-start ' />
        {p.price && (<>
          {p.price.heading && (
            <ApplyTypography >
              <h3>{p.price.heading}</h3>
            </ApplyTypography>
          )}
          <div className='flex flex-col justify-start items-stretch self-stretch w-full lg:self-center lg:grid lg:grid-cols-2 gap-4 '>
            <CardComponent block={p.price.priceCard} />
            <CardComponent block={p.price.msCard} />
          </div>
        </>)}
        <AccordianBlockComponent block={p.accordian} className='mt-5'/>
        <Spacer />
        <ContentComponent blocks={p.blocks} />
        <Spacer />
      </div>
    </div>
  </>)
}

export default ProductDetailBlockComponent
