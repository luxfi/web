import React from 'react'

import Image from 'next/image'

import { constrain } from '@luxdefi/ui'
import type { Dimensions } from '@luxdefi/ui'

import type { Block, ImageBlock } from '../def'

const ImageBlockComponent: React.FC<{
  block: Block
  className?: string
  constraint?: Dimensions
}> = ({
  block,
  className='',
  constraint
}) => {
  
  if (block.blockType !== 'image') {
    return <>iamge block required</>
  }

  const b = block as ImageBlock

  const dim = b.dim as Dimensions
  const conDim = (constraint ? constrain(dim, constraint) : dim) 

  return (
    <Image src={b.image!} alt='image' width={conDim.w} height={conDim.h}  className={className}/>
  )
}

export default ImageBlockComponent

