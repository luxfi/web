'use client'
import React from 'react'

import type { LinkDef } from '@hanzo/ui/types'
import { LinkElement }  from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const MobileNav: React.FC<{
  currentAs: string | undefined
  links: LinkDef[]
  className?: string
  commonItemClx?: string | ((def: LinkDef) => string),
  /**
   * This is called *in addition* to the link's actual navigation 
   * action.  eg, I link is clicked, and the modal menu is closes
   */
  onAction?: () => void 
}> = ({
  currentAs,
  links,
  onAction,
  className='',
  commonItemClx,
}) => ( 
  
  links.length > 0 ? (

    <nav className={className} >
    {links.map((el, index) => {
      const variant = el.variant ?? 'link'
      let internalClx = '' 
        // note that linkFG (or any other variant of 'link') 
        // will not get assigned these classes,
        // and will remain styles is 'foreground' (hence the name)
      if (variant === 'link') {
        internalClx+= ' text-muted hover:text-foreground active:text-accent border-b rounded-none'
        if (currentAs && currentAs === el.href) {
          internalClx += ' text-accent border-accent'
        }
      } 
      else {
        internalClx+= ' min-w-0'   
      }
      if (currentAs && currentAs === el.href) {
        internalClx += ' pointer-events-none'
      }
      const itemClx = (commonItemClx) ? (typeof commonItemClx === 'string' ? commonItemClx : commonItemClx(el)) : '' 

      return (
        <LinkElement 
          def={el}
          key={`common-${index}`}
          size='lg'
          className={cn(internalClx, itemClx)}
          onClick={onAction}  
        />
      )
    })}
    </nav>
  ) 
  : null
)

export default MobileNav
