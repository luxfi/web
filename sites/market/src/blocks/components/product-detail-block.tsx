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
import SplinePlayer from '@/components/spline-player'

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

  const TitleArea: React.FC<{className?: string}> = ({
    className=''
  }) => (
    <ApplyTypography className={cn('typography-headings:text-left typography-h2:md:text-3xl typography-h2:lg:text-4xl', className)}>
      <h2 className='text-left'>{p.title}</h2>
      {p.desc && (typeof p.desc === 'string') ? (
          <h6>{p.desc}</h6>
        ) : (
          p.desc
        )
      }
    </ApplyTypography>
  )

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
      <div className='mb-6 md:mb-12 w-full'>
        {p.video ? (
          <VideoBlockComponent block={p.video} agent={agent} size={videoSize} className='md:sticky md:top-[80px] md:mt-0 mt-[16px] mx-auto'/>
        ) :
        p.animation ? (
          <SplinePlayer src={p.animation} className='!aspect-square'/>
        ) : null}
      </div>

      <div className='md:bg-scroll w-full'>
        <div className='md:max-w-[555px] flex flex-col items-start gap-4' >
          <TitleArea className='flex flex-col justify-start items-start ' />
          {p.price && (<>
            {p.price.heading && (
              <ApplyTypography >
                <h3>{p.price.heading}</h3>
              </ApplyTypography>
            )}
            <div className='flex flex-col justify-start items-stretch self-stretch w-full sm:self-center sm:grid sm:grid-cols-2 gap-4 '>
              <CardComponent block={p.price.priceCard} agent={agent} />
              <CardComponent block={p.price.msCard} agent={agent} />
            </div>
          </>)}
          <AccordianBlockComponent block={p.accordian} agent={agent} className='mt-5'/>
          <Spacer />
          <ContentComponent blocks={p.blocks} agent={agent}/>
          <Spacer />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailBlockComponent
