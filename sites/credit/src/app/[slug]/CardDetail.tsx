import React from 'react'

import type { Block, BlockComponentProps, EnhHeadingBlock, ImageBlock } from '@hanzo/ui/blocks'
import { EnhHeadingBlockComponent, ImageBlockComponent } from '@hanzo/ui/blocks'

import type CardDetailBlock from '@/blocks/def/card-detail'



const CardDetail: React.FC<BlockComponentProps> = ({
  block,
  className='',
  agent
}) => {

  if (block.blockType !== 'card-detail') {
    return <>card detail block required</>
  }

  const b = block as CardDetailBlock
  
  return <>
    <EnhHeadingBlockComponent 
      block={{blockType: 'enh-heading', 
        heading: {text: b.heading, level: 1, mb: 6}, 
        byline: {text: b.material, level: 0}, 
      } satisfies EnhHeadingBlock as EnhHeadingBlock} 
      agent={agent} 
    />
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
    />
  </>
}

export default CardDetail
