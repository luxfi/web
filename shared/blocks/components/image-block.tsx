import React from 'react'

import Image from 'next/image'

import type { Dimensions } from '@/types'
import type { Block, ImageBlock } from '@/types/block'
import { constrain } from '@/util'

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

