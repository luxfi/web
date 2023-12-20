import React from 'react'

import type { LinkDef }  from '../types'
import { ButtonVariants } from '../primitives/button'
import { cn } from '../util'

import LinkElement from './link-element'

const NavItems: React.FC<{
  items: LinkDef[]
  className?: string,
  as?: React.ElementType
  itemClassName?: string,
  itemClassNameFromVariant?: (variant: ButtonVariants) => string
  currentAs?: string
}> = ({ 
  items,
  className='', 
  itemClassName='',
  as : Tag='nav',  
  itemClassNameFromVariant,
  currentAs 
}) => ( 
    items.length ? (
      <Tag className={className} >
        {items.map((item, index) => {

          const variant = item.variant ?? 'link'
          let extraClasses = '' 
            // note that linkFG (or any other variant of 'link') 
            // will not get assigned these classes,
            // and will remain styles is 'foreground' (hence the name)
          if (variant === 'link') {
            
            extraClasses+= ' text-nav hover:text-nav-hover'
            if (currentAs && currentAs === item.href) {
              extraClasses += ' text-nav-current'
            }
          } 
          else {
            extraClasses+= ' min-w-0'   
          }
          if (currentAs && currentAs === item.href) {
            extraClasses += ' pointer-events-none'
          }

          return (
            <LinkElement 
              def={item}
              key={index}
              size='default'
              className={cn(
                extraClasses,
                itemClassName,  
                (itemClassNameFromVariant && itemClassNameFromVariant(variant))
              )} 
            />
          )
        })}
      </Tag>
    ) 
    : null
  )

  export default NavItems
