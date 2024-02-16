import React from 'react'

import type { Block, BlockComponentProps, ImageBlock } from '@hanzo/ui/blocks'
import { ImageBlockComponent, SpaceBlockComponent } from '@hanzo/ui/blocks'
import { ApplyTypography, LinkElement, type ButtonSizes } from '@hanzo/ui/primitives'
import { cn, capitalize } from '@hanzo/ui/util'

import type CardDetailBlock from '@/blocks/def/card-detail'
import { getProductHeading } from '@/util'

import siteDef from '@/siteDef'

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
  
  const Title: React.FC<{ 
    className?:  string
    phone?: boolean
  }> = ({
    className='',
    phone=false
  }) => (
    <div className={className}>
      <h1 className='text-foreground font-heading text-2xl font-bold' style={{lineHeight: phone ? 1 : 'initial'}}>{getProductHeading(b.product)}</h1>
      <h6 className='text-foreground italic text-sm'>{b.material}</h6>
    </div>
  )

  const ImageArea: React.FC<{ 
    imageClx?:  string
    outerClx?: string
    labelClx?: string
  }> = ({
    imageClx="",
    outerClx="",
    labelClx=''
  }) => (
    <div className={cn(
      'md:flex md:flex-col md:items-end',
      'portrait:mr-4 portrait:flex portrait:flex-col portrait:items-end portrait:relative ', 
      'sm:flex sm:flex-col sm:items-end sm:relative ', 
      outerClx
    )}>
      <ImageBlockComponent 
        block={{blockType: 'image',
          ...b.image,
          alt: `Lux ${capitalize(b.product)} Card`,
          specifiers: '',
          props: { style: {
            width: '100%',
            height: 'auto',
          }}
        } satisfies ImageBlock as Block} 
        agent={agent}
        className={imageClx} 
      />
      <h4 className={cn('font-medium text-muted md:text-sm mr-4 relative self-end ' + 
        'landscape:text-sm portrait:mb-0 portrait:mr-2 portrait:text-muted-2 ' + 
        'text-xxs sm:mb-0 sm:mr-2 sm:text-muted-2',
        labelClx)}
      >
        Lux {capitalize(b.product)}
      </h4>
    </div>
  )

  const Fees: React.FC<{ className?:  string}> = ({className=''}) => (
    <div className={cn('italic text-sm', className)}>
      <span className='font-bold xs:text-foreground'>{b.initial}</span>&nbsp;Initiation Fee +<br/>
      <span className='font-bold xs:text-foreground'>{b.annual}</span>&nbsp;Annually after<br/>
    </div>
  )

  const ReserveButton: React.FC<{ 
    size: ButtonSizes, 
    className?:  string
  }> = ({
    size,
    className=''
  }) => (
    <LinkElement 
      def={{
        title: 'Reserve Now',
        href: siteDef.ext!.buyUrlBase + `/${b.product}`,
        variant: 'primary',
        size,
      }} 
      className={className}
    />
  )

  const Details: React.FC<{ className?:  string}> = ({className=''}) => (
    <div className={cn('border border-muted-4 rounded-md flex flex-col', className)}>
      <ApplyTypography className={cn('p-6 pb-2',
        'columns-2 gap-6 typography-p:text-muted typography-p:mb-3',
        'typography-p:break-inside-avoid-column',
        'typography-p:font-normal typography-strong:font-800 typography-p:lg:text-sm typography-p:xl:text-base ',
        'typography-p:portrait:text-sm typography-p:sm:text-sm portrait:gap-4 portrait:p-4 sm:p-4',
        'typography-p:xs:text-sm typography-p:xs:portrait:text-sm xs:p-3 xs:portrait:gap-3 ',
        
      )}>
        {b.detail}
      </ApplyTypography>
      <ReserveButton size='sm' className='xs:flex sm:hidden xs:mx-auto self-center mb-3'/>
    </div>
  )

  const layoutClx = 'grid md:grid-cols-3 lg:grid-cols-2 md:gap-6 md:mb-[vh3] ' +
    'portrait:grid-cols-1 sm:grid-cols-1'

  const mobileLayoutClx = 'flex flex-col justify-start items-stretch'

  return agent === 'phone' ? (
    <div className={cn(mobileLayoutClx, className)}>
      <Title phone />
      <div className='flex flex-row justify-between items-stretch mt-3 ' style={{flexBasis: 'min-content'}}>
        <div className='flex flex-col justify-between'>
          <Fees className='text-xs text-muted'/>
          <ReserveButton size='sm' className='ml-1 mt-3'/>
        </div>
        <ImageArea outerClx='max-w-28 portrait:mr-2' labelClx='portrait:hidden'/>
      </div>
      <Details className='mt-3'/>
    </div>
  ) : (
    <div className={cn(layoutClx, className)}>
      <div className='md:col-span-2 lg:col-span-1'>
        <div className={'mb-3 portrait:flex portrait:flex-row portrait:justify-between ' + 
          'sm:flex sm:flex-row sm:justify-between md:block'}
        >
          <div className={'flex md:flex-row portrait:flex-col sm:flex-col ' + 
            'sm:justify-between md:items-end portrait:items-start sm:items-start'
          }>
            <Title />
            <Spacer className='sm:h-2 landscape:md:h-2' />
            <Fees className='ml-1' />
          </div>
          <ImageArea outerClx='sm:max-w-28 landscape:md:hidden' labelClx='sm:hidden portrait:hidden' />
        </div>
        <Spacer className='landscape:hidden sm:hidden' />
        <Details className='md:mt-4'/>
      </div>
      <div className='flex flex-col justify-center items-center md:pt-10 '>
        <ImageArea outerClx='2xl:max-w-pr-50 xl:max-w-pr-55 lg:max-w-pr-50 md:max-w-pr-70 portrait:hidden sm:hidden md:flex' />
        <ReserveButton size='lg' className='sm:text-sm !min-w-0 max-w-200 sm:h-9 portrait:mt-[2vh] sm:mt-[2vh] '/>
      </div>
    </div>
  )
}

export default CardDetailBlockComponent
