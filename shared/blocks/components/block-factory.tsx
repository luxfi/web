import React from 'react'

import type * as B from '@/types/block'

import CardBlockComponent from './card-block'
import HeadingBlockComponent from './heading-block'
import CTABlockComponent from './cta-block'
import SpaceBlockComponent from './space-block'
import ImageBlockComponent from './image-block'
import VideoBlockComponent from './video-block'
import AccordianBlockComponent from './accordian-block'
import GroupBlockComponent from './group-block'

const BlockFactory: React.FC<{
  block: B.Block
  className?: string
}> = ({
  block,
  className=''
}) => {

  switch (block.blockType) {
    case 'group': {
      return <GroupBlockComponent block={block} className={className} />
    }
    case 'card': {
      return <CardBlockComponent block={block} className={className} />
    }
    case 'cta': {
      return <CTABlockComponent block={block} itemClassName={className}/>
    }
    case 'heading': {
      return <HeadingBlockComponent block={block} className={className}/>
    }
    case 'space': {
      return <SpaceBlockComponent block={block} className={className} />
    }
    case 'video': {
      return <VideoBlockComponent block={block} className={className} />
    }
    case 'image':  {
      return <ImageBlockComponent block={block} className={className} />
    }
    case 'accordian': {
      return <AccordianBlockComponent block={block} className={className} />
    }
  }

  return <>unknown block type</>
}

export default BlockFactory
