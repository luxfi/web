import React from 'react'

import type { Block, BlockComponentProps, ImageBlock } from '@hanzo/ui/blocks'
import { ImageBlockComponent, SpaceBlockComponent } from '@hanzo/ui/blocks'
import { ApplyTypography, LinkElement } from '@hanzo/ui/primitives'
import { cn, capitalize } from '@hanzo/ui/util'

import type CardDetailBlock from '@/blocks/def/card-detail'
import { getProductHeading } from '@/util'

import siteDef from '@/siteDef'
const buyUrlBase = (siteDef as any).buyUrlBase

const Spacer: React.FC<{ className?:  string}> = ({className=''}) => (
  <SpaceBlockComponent block={{blockType: 'space'}} className={className} />
)

const CardDetailBlockComponent: React.FC<BlockComponentProps> = ({
  block,
  className='',
  agent
}) => {

  if (block.blockType !== 'card-detail') {
    return <>card detail block required</>
  }

  const b = block as CardDetailBlock
  
  const Title: React.FC<{ className?:  string}> = ({className=''}) => (
    <div className={className}>
      <h1 className='text-foreground font-heading text-2xl font-bold'>{getProductHeading(b.product)}</h1>
      <h6 className='text-foreground italic text-sm'>{b.material}</h6>
    </div>
  )

  const ImageArea: React.FC<{ 
    imageClx?:  string
    outerClx?: string
  }> = ({
    imageClx="",
    outerClx=""
  }) => (
    <div className={cn(
      'md:flex md:flex-col md:items-end',
      'portrait:mr-4 portrait:flex portrait:flex-col portrait:items-end portrait:relative portrait:-top-6', 
      'sm:mr-4 sm:flex sm:flex-col sm:items-end sm:relative sm:-top-6', 
      outerClx
    )}>
      <ImageBlockComponent 
        block={{blockType: 'image',
          ...b.image,
          specifiers: '',
          props: { style: {
            width: '100%',
            height: 'auto',
          }}
        } satisfies ImageBlock as Block} 
        agent={agent}
        className={imageClx} 
      />
      <h4 className={'font-medium text-muted md:text-base mr-4 relative md:-top-pr-10 self-end ' + 
        'portrait:-top-pr-5 portrait:text-xs portrait:mb-0 ' + 
        'sm:-top-pr-5 sm:text-xs sm:mb-0'
      }>
        Lux {capitalize(b.product)}
      </h4>
    </div>
  )

  const Details: React.FC<{ className?:  string}> = ({className=''}) => (
    <ApplyTypography className={cn('border border-muted-4 p-6 pb-2 rounded-md',
      'columns-2 gap-6 typography-p:text-muted typography-p:mb-3',
      'typography-p:break-inside-avoid-column',
      'typography-p:font-normal typography-strong:font-800 typography-p:lg:text-sm typography-p:xl:text-base ',
      className
    )}>
      {b.detail}
    </ApplyTypography>
  )

  const Fees: React.FC<{ className?:  string}> = ({className=''}) => (
    <div className={cn('italic text-sm', className)}>
      <span className='font-bold'>{b.initial}</span>&nbsp;Initiation Fee +<br/>
      <span className='font-bold'>{b.annual}</span>&nbsp;Annually after<br/>
    </div>
  )

  const layoutClx = 'grid md:grid-cols-3 lg:grid-cols-2 md:gap-6 md:mb-[vh3] ' +
    'portrait:grid-cols-1 sm:grid-cols-1'

  return <div className={cn(layoutClx, className)}>
    <div className='md:col-span-2 lg:col-span-1'>
      <div className={'portrait:flex portrait:flex-row  portrait:justify-between ' + 
      'sm:flex sm:flex-row sm:justify-between md:block'}>
      <div className={'flex md:flex-row portrait:flex-col sm:flex-col md:justify-between portrait:justify-start ' + 
        'sm:justify-start md:items-end portrait:items-start sm:items-start'
      }>
        <Title />
        <Spacer className='landscape:hidden' />
        <Fees />
      </div>
      <ImageArea outerClx='sm:max-w-36 landscape:hidden' />
      </div>
      <Spacer />
      <Details />
    </div>
    <div className='flex flex-col md:justify-start justify-center items-center md:pt-10 lg:pt-0'>
      <ImageArea outerClx='md:max-w-pr-75 portrait:hidden sm:hidden md:flex' />
      <LinkElement 
        def={{
          title: 'Reserve Now',
          href: buyUrlBase + `/${b.product}`,
          variant: 'primary',
          size: 'lg',
        }} 
        className='md:text-sm md:min-w-0 md:h-9 portrait:mt-[2vh] sm:mt-[2vh] md:mt-0'
      />
    </div>
  </div>
}

export default CardDetailBlockComponent
