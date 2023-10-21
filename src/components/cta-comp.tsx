'use client'

import React from 'react'
import { type CTABlock } from '@/content/types'
import LinkItem from '@/components/link-item'

const CTAComponent: React.FC<{
  cta: CTABlock
}> = ({
  cta : { items } 
}) => (
  <>
  {items?.map((item, index) => (
    <LinkItem 
      item={item}
      key={index}
      size='lg'
    />
  ))}
  </>
)

export default CTAComponent
