import React from 'react'

import type { Block, BlockComponentProps, ImageBlock } from '@hanzo/ui/blocks'
import { ImageBlockComponent, SpaceBlockComponent } from '@hanzo/ui/blocks'
import { ApplyTypography, LinkElement, type ButtonSizes } from '@hanzo/ui/primitives'
import { cn, capitalize } from '@hanzo/ui/util'

import type CardDetailBlock from '@/blocks/def/card-detail'
import { getProductHeading } from '@/util'

import siteDef from '@/siteDef'

<<<<<<< HEAD
=======
const toUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

>>>>>>> site/credit
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
<<<<<<< HEAD

  const b = block as CardDetailBlock
  
=======
  const b = block as CardDetailBlock
  
  const Run: React.FC<{run: number}> = ({
    run
  }) => (
    (run === -1) ? null : (
      <span>&nbsp;&nbsp;<span className='italic text-xs'>{`1/${b.run.toLocaleString()}`}</span></span>
    )
  )

>>>>>>> site/credit
  const Title: React.FC<{ 
    className?:  string
    phone?: boolean
  }> = ({
    className='',
    phone=false
  }) => (
    <div className={className}>
<<<<<<< HEAD
      <h1 className='text-foreground font-heading text-2xl font-bold' style={{lineHeight: phone ? 1 : 'initial'}}>{getProductHeading(b.product)}</h1>
      <h6 className='text-muted text-sm'>{b.material}&nbsp;&nbsp;<span className='italic text-xs'>{b.quantity}</span></h6>
=======
      <h1 className='text-foreground font-heading text-2xl font-bold' style={{lineHeight: phone ? 1 : 'initial'}}>
        {getProductHeading(b.level)}
      </h1>
      <h6 className='text-muted text-sm'>{b.material.short}<Run run={b.run}/></h6>
>>>>>>> site/credit
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
<<<<<<< HEAD
      <ImageBlockComponent 
        block={{blockType: 'image',
          ...b.image,
          alt: `Lux ${capitalize(b.product)} Card`,
=======
      <h4 className={cn('font-medium text-muted md:text-sm relative self-center ' + 
        'landscape:text-sm portrait:mb-0  portrait:text-muted-2 ' + 
        'text-xxs sm:mb-0 sm:text-muted-2',
        labelClx)}
      >
        {capitalize(b.level)}&nbsp;Card
      </h4>
      <ImageBlockComponent 
        block={{blockType: 'image',
          ...b.image,
          alt: `Lux ${capitalize(b.level)} Card`,
>>>>>>> site/credit
          specifiers: '',
          props: { style: {
            width: '100%',
            height: 'auto',
          }}
        } satisfies ImageBlock as Block} 
        agent={agent}
        className={imageClx} 
      />
<<<<<<< HEAD
      <h4 className={cn('font-medium text-muted md:text-sm mr-4 relative self-end ' + 
        'landscape:text-sm portrait:mb-0 portrait:mr-2 portrait:text-muted-2 ' + 
        'text-xxs sm:mb-0 sm:mr-2 sm:text-muted-2',
        labelClx)}
      >
        Lux {capitalize(b.product)}
      </h4>
=======
>>>>>>> site/credit
    </div>
  )

  const Fees: React.FC<{ className?:  string}> = ({className=''}) => (
    <div className={cn('text-sm text-foreground text-right', className)}>
<<<<<<< HEAD
      <span className='font-bold'>{b.initial}</span><span>&nbsp;Initiation Fee</span><br/>
      <span className='font-bold'>{b.annual}</span><span>&nbsp;Annually after</span>
=======
      <span className='font-bold'>{toUSD.format(b.fees.initial)}</span><span>&nbsp;Initiation Fee</span><br/>
      <span className='font-bold'>{toUSD.format(b.fees.annual)}</span><span>&nbsp;Annually after</span>
>>>>>>> site/credit
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
<<<<<<< HEAD
        href: siteDef.ext!.buyUrlBase + `/${b.product}`,
=======
        href: siteDef.ext!.buyUrlBase + `/${b.level}`,
>>>>>>> site/credit
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

<<<<<<< HEAD
  const layoutClx = 'grid md:grid-cols-3 lg:grid-cols-2 md:gap-6 md:mb-[vh3] ' +
=======
  const layoutClx = 'grid md:grid-cols-3 md:gap-6 md:mb-[vh3] ' +
>>>>>>> site/credit
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
<<<<<<< HEAD
      <div className='md:col-span-2 lg:col-span-1'>
=======
      <div className='md:col-span-2'>
>>>>>>> site/credit
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
<<<<<<< HEAD
        <ImageArea outerClx='2xl:max-w-pr-50 xl:max-w-pr-55 lg:max-w-pr-50 md:max-w-pr-70 portrait:hidden sm:hidden md:flex' />
=======
        <ImageArea outerClx='md:flex md:max-w-pr-70 portrait:hidden sm:hidden ' />
>>>>>>> site/credit
        <ReserveButton size='lg' className='sm:text-sm !min-w-0 max-w-200 sm:h-9 portrait:mt-[2vh] sm:mt-[2vh] '/>
      </div>
    </div>
  )
}

export default CardDetailBlockComponent
