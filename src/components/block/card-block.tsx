import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/primitives/card"

import type { CardBlock, VideoDimensions } from '@/types/blocks'

import MediaBlockComponent from './media-block'
import CTABlockComponent from './cta-block'

const StandardCard: React.FC<{
  card: CardBlock
  className?: string
  contentClassName?: string
}> = ({
  card,
  className='',
  contentClassName=''
}) => (
  <Card className={'flex flex-col self-stretch ' + (card.cardType?.includes('bg-card') ? 'bg-accent ' : ' ')+ className}>
    {(card.title || card.byline) && (
      <CardHeader>
        {card.title && (<CardTitle className='not-typography text-center text-lg font-medium'>{card.title}</CardTitle>)}
        {card.byline && (<CardDescription>{card.byline}</CardDescription>)}
      </CardHeader>      
    )}
    <CardContent className={
      'flex flex-col justify-start items-center ' + contentClassName + 
      ((card.cardType === 'full-width') ? ' p-0' : '') + 
      ((!card.cta) ? ' grow' : '')
    }>
      {card.media && (
        <MediaBlockComponent media={card.media} />
      )}
      {card.content && (
        (typeof card.content === 'string') ? (
          <p>{card.content}</p>
        ) : card.content 
      )}
    </CardContent>
    {card.cta && (
      <CardFooter className='grid grid-cols-1 gap-2 md:flex md:flex-row md:justify-center' >
        <CTABlockComponent cta={card.cta} />
      </CardFooter>
    )}
  </Card>  
)

const MediaLeftCard: React.FC<{
  card: CardBlock
  className?: string
}> = ({
  card,
  className=''
}) => (
  <Card className={'flex flex-col self-stretch ' + className}>
    {(card.title || card.byline) && (
      <CardHeader>
        {card.title && (<CardTitle className='not-typography text-center text-lg font-medium'>{card.title}</CardTitle>)}
        {card.byline && (<CardDescription>{card.byline}</CardDescription>)}
      </CardHeader>      
    )}
    <CardContent className='flex flex-row justify-center items-stretch p-0 grow'>
      {card.media && (
        <div className='px-6 py-3 box-content grow-0'  style={{
          width: (card.media.dim as VideoDimensions).sm!.width 
        }}>
          <MediaBlockComponent media={card.media} size='sm' />
        </div>
      )}
      {card.content && (
        <div className='grow border-l p-6'>
        {(typeof card.content === 'string') ? (

          <p>{card.content}</p>
        ) : card.content} 
        </div>
      )}
    </CardContent>
    {card.cta && (
      <CardFooter className='grid grid-cols-1 gap-2 md:flex md:flex-row md:justify-center' >
        <CTABlockComponent cta={card.cta} />
      </CardFooter>
    )}
  </Card>  
)

export {
  StandardCard,
  MediaLeftCard  
}
