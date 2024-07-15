'use client' // Put spline back into a client component, make this ssr comp
import React  from 'react'

import type { TShirtSize } from '@hanzo/ui/types'
import { cn } from '@hanzo/ui/util'
import { LinkElement, buttonVariants } from '@hanzo/ui/primitives'
import { VideoBlockComponent, type BlockComponentProps  } from '@hanzo/ui/blocks'

import { BuyButton } from '@luxfi/ui'

import Spline from '@splinetool/react-spline'
import type BannerBlock from '@/blocks/def/banner-block'

type BannerGrouping = 'separate' | 'titleAndMedia-cta'

interface GroupClx {
  title?: string // for media and title if grouping === 'titleAndMedia-cta'
  media?: string
  cta?: string
}

const BannerBlockComponent: React.FC<BlockComponentProps & {
  videoSize?: TShirtSize
  videoConstraint?: {w: number, h: number}
  grouping?: BannerGrouping
  groupClx?: GroupClx
}> = ({
  block,
  agent,
  grouping = 'titleAndMedia-cta',
  groupClx={},
  videoSize='md',
  videoConstraint
}) => {

  if (block.blockType !== 'banner') {
    return <>banner block required</>
  }
  const banner = block as BannerBlock
  const specifies = (s: string) => (banner.specifiers?.includes(s))  

  const CTAs: React.FC<{className?: string}> = ({
    className=''
  }) => ((banner.skuPath || banner.learnLink) ? (
    <div className={cn(
      (banner.skuPath && banner.learnLink) ? 'grid grid-cols-2 gap-2' : 'flex flex-row',
      'sm:flex sm:flex-row justify-center items-center sm:gap-4 lg:gap-6', 
      className
    )}>
    {banner.learnLink && (
      <LinkElement 
        def={{
          href: banner.learnLink.href,
          title: banner.learnLink.title ? banner.learnLink.title : 'Learn More',
          newTab: banner.learnLink.newTab
        }} 
        className={cn(
          buttonVariants({ 
            variant: banner.skuPath ? 'outline' : 'primary', 
            size: 'default', 
            rounded: 'md' 
          }),
          'lg:min-w-[220px]  sm:min-w-[220px]'
        )}
      />
    )}
    {banner.skuPath && (
      <BuyButton 
        skuPath={banner.skuPath} 
        size='default'
        className={'lg:min-w-[220px] sm:min-w-[220px] ' + (banner.learnLink ? '' : '!min-w-[320px]')}
      >
        Buy
      </BuyButton>
    )}
    </div>
  ) : null)

  return (grouping === 'separate') ? 
    (<>
      <div className={'text-center ' + groupClx.title ?? ''}>
        {banner.bylineBefore && (<h5 className='text-center'>{banner.bylineBefore}</h5>)}
        <h1>{banner.title}</h1>
        {banner.byline && (<h5 className='text-center'>{banner.byline}</h5>)}
      </div>
      <div className={'self-center w-full max-w-[40rem] flex flex-col justify-center items-center text-center ' + groupClx.media ?? ''}>
        { banner.video ? (
          <VideoBlockComponent 
            className='self-center not-typography' 
            block={{blockType: 'video', ...banner.video}} 
            agent={agent}
            size={videoSize} 
            constrainTo={videoConstraint}
          />
        ) :
        banner.animation ? (
          <Spline scene={banner.animation} className='!w-full !h-auto pointer-events-none !aspect-[12/10]'/>
        ) : null}
      </div>
      <CTAs className={groupClx.cta ?? ''}/>
    </>) : /* grouping === 'titleAndMedia-cta' */ (<>
      <div className={'self-center flex flex-col justify-start items-center text-center ' + groupClx.title ?? ''} >
        {banner.bylineBefore && (<h5 className='text-center'>{banner.bylineBefore}</h5>)}
        <h1>{banner.title}</h1>
        {banner.byline && (<h5 className='text-center'>{banner.byline}</h5>)}
        {banner.video ? (
          <VideoBlockComponent 
            className='self-center not-typography' 
            block={{blockType: 'video', ...banner.video}} 
            agent={agent}
            size={videoSize} 
            constrainTo={videoConstraint}
          />
        ) :
        banner.animation ? (
          <Spline scene={banner.animation} className='!w-full !h-auto pointer-events-none !aspect-[12/10]'/>
        ) : null}
      </div>
      <CTAs className={groupClx.cta ?? ''}/>
    </>)
}

export {
  BannerBlockComponent as default,
  type BannerGrouping as AssetBannderGroupingType
}
