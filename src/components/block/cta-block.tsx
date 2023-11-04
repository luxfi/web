'use client'

import React from 'react'
import { type CTABlock } from '@/types/blocks'
import LinkItem from '@/components/link-item'

const CtaBlockComponent: React.FC<{
  cta: CTABlock,
  itemClassName?: string
}> = ({
  cta : { items },
  itemClassName='' 
}) => (
  <>
  {items?.map((item, index) => (
    <LinkItem 
      item={item}
      key={index}
      size='lg'
      className={itemClassName}
    />
  ))}
  </>
)

export default CtaBlockComponent
