import React from 'react'

import type { Block, CardBlock, VideoDimensions } from '@/types/block'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/primitives/card'
import ApplyTypography, { type TypographySize } from '@/primitives/apply-typography'

import MediaBlockComponent from '../media-block'
import CTABlockComponent from '../cta-block'

const getTypographySize = (s: string): TypographySize => {
  const tokenArray = s.split(' ')
  const sizeToken = tokenArray.find((tok) => (tok.startsWith('typography-')))
  if (sizeToken) {
    const subTokenArray = sizeToken.split('-')
    return subTokenArray[1] as TypographySize
  }
  return 'responsive'
}

const CardBlockComponent: React.FC<{
  block: Block
  className?: string
  contentClassName?: string
}> = ({
  block,
  className='',
  contentClassName=''
}) => {

  if (block.blockType !== 'card') {
    return <>card block required</>
  }

  const card = block as CardBlock

  const disabledBorder = (card.specifiers?.includes('appear-disabled') ? ' border-foreground-fully-muted' : ' border-foreground-very-muted')
  const outerBorder = (card.specifiers?.includes('no-outer-border') ? ' border-0' : ' ')
  const disabledText = (card.specifiers?.includes('appear-disabled') ? ' text-foreground-more-muted' : '')
  const cardBG = (card.specifiers?.includes('bg-card') ? ' bg-level-1' : '')
  const contentClasses = (card.specifiers?.includes('left-justify-content') ? ' items-start justify-start' : '') + contentClassName
  const titleClasses = (card.specifiers?.includes('heading-style-title') ? ' font-heading text-base leading-tight' : '') 
  const paddingClasses = (card.specifiers?.includes('link-entire-on-mobile') ? ' px-4 py-3' : ' px-6 py-3')

  const typoSize: TypographySize = (card.specifiers) ? getTypographySize(card.specifiers) : 'responsive'

  const ContentArea: React.FC = () => {
    if (card.specifiers?.includes('media-left')) {
      return (
        <CardContent className={'flex flex-row justify-center items-stretch p-0 grow' + disabledBorder + cardBG + contentClasses}>
        {card.media && (
          <div className={'box-content grow-0 not-typography' + paddingClasses}   style={{
            width: (card.media.dim as VideoDimensions).sm!.width 
          }}>
            <MediaBlockComponent 
              block={card.media} 
              usePoster={card.specifiers?.includes('video-use-poster')} 
              size='sm' 
              className={card.specifiers?.includes('appear-disabled') ? 'opacity-[0.6]' : ''}
            />
          </div>
        )}
        {card.content && (
          <ApplyTypography className={'grow border-l flex flex-col justify-center ' + paddingClasses + disabledBorder} size={typoSize}>
            <div className={disabledText} >
            {(typeof card.content === 'string') ? (<p>{card.content}</p>) : card.content} 
            </div>
          </ApplyTypography>
        )}
        </CardContent>
      )
    }
    return (
      <CardContent className={
        'flex flex-col justify-start items-center grow ' + cardBG + paddingClasses + contentClassName + 
        ((card.specifiers === 'full-width') ? ' p-0' : '') 
      }>
        <ApplyTypography size={typoSize}>
          <div className={disabledText} >
          {card.media && (
            <MediaBlockComponent block={card.media} />
          )}
          {card.content && (
            (typeof card.content === 'string') ? (<p>{card.content}</p>) : card.content
          )}
          </div>
        </ApplyTypography>
      </CardContent>
    )
  }

  return (
    <Card className={'flex flex-col self-stretch ' + disabledBorder + outerBorder + cardBG + className}>
      {(card.title || card.byline) && (
        <CardHeader className={'not-typography' + ' text-accent' + disabledText + paddingClasses}>
          {card.title && (<CardTitle className={'text-center text-lg font-medium' + titleClasses}>{card.title}</CardTitle>)}
          {card.byline && (<CardDescription>{card.byline}</CardDescription>)}
        </CardHeader>      
      )}
      <ContentArea />
      {card.cta && (
        <CardFooter className={'grid grid-cols-1 gap-2 md:flex md:flex-row md:justify-center' + paddingClasses} >
          <CTABlockComponent block={card.cta} />
        </CardFooter>
      )}
    </Card>  
  )
}

export default CardBlockComponent