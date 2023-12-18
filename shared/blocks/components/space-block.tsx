import React from 'react'

import type { Block, SpaceBlock } from '../def'

const SpaceBlockComponent: React.FC<{
  block?: Block
  className?: string
}> = ({
  block,
  className=''
}) => {
  
  if (block && block.blockType !== 'space') {
    return <>space block required</>
  }

  const size = (block) ? ((block as SpaceBlock).level ?? 0) : 0

  let Tag: React.ElementType = 'div' // corresponds to 0

  switch(size) {
    case 1:
      Tag = 'h1'
    break
    case 2:
      Tag = 'h2'
    break
    case 3:
      Tag = 'h3'
    break
    case 4:
      Tag = 'h4'
    break
    case 5:
      Tag = 'h5'
    break
    case 6:
      Tag = 'h6'
    break
  }

  return (
    <Tag className={`invisible m-0 ${Tag === 'div' ? 'h-[1px]' : ''} ${className}`} >&nbsp;</Tag> 
  )
}

export default SpaceBlockComponent
