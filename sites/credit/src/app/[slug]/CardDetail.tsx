import React from 'react'

import type { BlockComponentProps } from '@hanzo/ui/blocks'
import { EnhHeadingBlockComponent } from '@hanzo/ui/blocks'

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
    <h1>Testing</h1>
    <EnhHeadingBlockComponent block={b.heading} agent={agent} />
  </>
}

export default CardDetail
