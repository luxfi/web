import React from 'react'

import type * as B from '@/types/blocks'

import { StandardCard, MediaLeftCard } from '@/components/block/card-block'
import HeadingBlockComponent from './heading-block'
import CTABlockComponent from './cta-block'

const BlockRenderer: React.FC<{
  block: B.Block
  className?: string
}> = ({
  block,
  className=''
}) => {

  if (block.blockType === 'card') {
    const cardBlock = block as B.CardBlock
    if (cardBlock.cardType === 'media-left') {
      return <MediaLeftCard card={cardBlock} className={className}/>
    }
    else {
      return (
        <StandardCard 
          card={cardBlock} 
          className={className} 
          contentClassName={cardBlock.cardType?.includes('left-justify-content') ? 'items-start justify-start' : ''}
        />
      )
    }
  }
  else if (block.blockType === 'heading') {
    const headingBlock = block as B.HeadingBlock
    return <HeadingBlockComponent heading={headingBlock} className={className}/>
  }
  else if (block.blockType === 'space') {
    return <HeadingBlockComponent heading={{blockType: 'heading', heading: '&nbsp;', level: 0}} className={className + ' h-[1px] m-0 invisible'} />
  }
  else if (block.blockType === 'cta') {
    const ctaBlock = block as B.CTABlock
    return <CTABlockComponent cta={ctaBlock} itemClassName={className}/>
  }


  return <></>
}

export default BlockRenderer
