'use client'
import React from 'react'

import { LinkElement }  from '../../common'
import { ButtonVariants }  from '../../primitives'
import { SiteConf } from '../../types'

const MobileNav: React.FC<{
  conf: SiteConf
  itemVariant?: ButtonVariants
  className?: string
  itemClassName?: string
  onAction?: () => void // for close functionality
}> = ({
  conf,
  onAction,
  className='',
  itemClassName='',
  itemVariant
}) => (
  conf.mainNav.full.length ? (
    <nav className={className} >
      {conf.mainNav.full.map((el, index) => (
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
