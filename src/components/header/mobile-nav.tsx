import React from 'react'

import type { ButtonVariants } from '@/primitives/button'

import LinkElement from '@/components/link-element'
import { nav } from '@/content'

const elements = nav.all

const MobileNav: React.FC<{
  itemVariant?: ButtonVariants
  className?: string
  itemClassName?: string
  onAction: () => void // for close functionality
}> = ({
  onAction,
  className='',
  itemClassName='',
  itemVariant
}) => (
  
  elements.length ? (
    <nav className={className} >
      {elements.map((el, index) => (
        <LinkElement 
          def={el}
          key={index}
          size='lg'
          className={itemClassName}
          variant={itemVariant}
          onClick = {onAction} 
        />
      ))}
    </nav>
  ) 
  : null
)

export default MobileNav
