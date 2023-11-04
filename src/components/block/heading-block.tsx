import React from 'react'

import { HeadingBlock } from '@/types/blocks'


const HeadingBlockComponent: React.FC<{
  heading: HeadingBlock,
  className?: string
}> = ({
  heading,
  className=''
}) => {
  if (heading.level === 0) {
    return <p className={className}>{heading.heading}</p>
  }
  else if (heading.level === 1) {
    return <h1 className={className}>{heading.heading}</h1>
  }
  else if (heading.level === 2) {
    return <h2 className={className}>{heading.heading}</h2>
  }
  else if (heading.level === 3) {
    return <h3 className={className}>{heading.heading}</h3>
  }
  else if (heading.level === 4) {
    return <h4 className={className}>{heading.heading}</h4>
  }
  else if (heading.level === 5) {
    return <h5 className={className}>{heading.heading}</h5>
  }
  else if (heading.level === 6) {
    return <h6 className={className}>{heading.heading}</h6>
  }
  
  return <h3 className={className}>{heading.heading}</h3>
}

export default HeadingBlockComponent
