'use client'

import React from 'react'
import { type CTABlock } from '@/types/blocks'
import LinkItem from '@/components/link-item'
import { type ButtonSizes } from '@/primitives/button'

const CtaBlockComponent: React.FC<{
  cta: CTABlock,
  itemClassName?: string,
  itemSize?: ButtonSizes
}> = ({
  cta : { items },
  itemClassName='',
  itemSize='default' 
}) => (
  <>
  {items?.map((item, index) => (
    <LinkItem 
      item={item}
      key={index}
      size={itemSize}
      className={itemClassName}
    />
  ))}
  </>
)

export default CtaBlockComponent
