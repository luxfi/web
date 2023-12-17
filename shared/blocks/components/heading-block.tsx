import React from 'react'

import type { Block, HeadingBlock } from '@/types/block'

const HeadingBlockComponent: React.FC<{
  block: Block,
  className?: string
}> = ({
  block,
  className=''
}) => {

  if (block.blockType !== 'heading') {
    return <>heading block required</>
  }
  const heading = block as HeadingBlock

  let Tag: React.ElementType = 'h3' // default 

  switch (heading.level) {
    case 0: {
      Tag = 'p'
    } break
    case 1: {
      Tag = 'h1'
    } break
    case 2: {
      Tag = 'h2'
    } break

    case 4: {
      Tag = 'h4'
    } break
    case 5: {
      Tag = 'h5'
    } break
    case 6: {
      Tag = 'h6'
    } break
  }

  return <Tag className={className}>{heading.heading}</Tag>
}

export default HeadingBlockComponent
