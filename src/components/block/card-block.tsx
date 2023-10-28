import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/primitives/card"

import type { CardBlock } from '@/content/types'

import MediaBlockComponent from './media-block'
import CTABlockComponent from './cta-block'

const StandardCard: React.FC<{
  card: CardBlock
  className?: string
}> = ({
  card,
  className=''
}) => (
  <Card className={'flex flex-col ' + className}>
    {(card.title || card.byline) && (
      <CardHeader>
        {card.title && (<CardTitle className='not-typography text-center text-lg font-medium'>{card.title}</CardTitle>)}
        {card.byline && (<CardDescription>{card.byline}</CardDescription>)}
      </CardHeader>      
    )}
    <CardContent className={
      'flex flex-col justify-center items-center' + 
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

export {
  StandardCard  
}
