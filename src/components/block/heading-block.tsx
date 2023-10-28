import React from 'react'

import { HeadingBlock } from '@/content/types'

const HeadingBlockComponent: React.FC<{
  heading: HeadingBlock,
  className?: string
}> = ({
  heading,
  className=''
}) => (
  <h3 className={className}>{heading.heading}</h3>
)
// TODO Support other types

export default HeadingBlockComponent
