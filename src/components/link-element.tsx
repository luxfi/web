import React from 'react'
import Link from 'next/link'

import type { LinkDef }  from '@/types'
import { buttonVariants, type ButtonSizes, type ButtonVariants } from '@/primitives/button'
import { cn } from '@/util'

const LinkElement: React.FC<{
  def: LinkDef,
  variant? : ButtonVariants
  size?: ButtonSizes 
  onClick?: () => void // for UI changes in addition to link (eg, close menu)
  className?: string,
  icon?: React.ReactNode
  iconAfter?: boolean
}> = ({ 
  def,
  size = 'lg',
  onClick,
  variant,
  className = '',
  icon,     // override
  iconAfter // override
} ) => {

  const {
    href,
    external,
    newTab,
    variant: defVariant,
    size: defSize, 
    title
  } = def

  const toSpread = {
    ...((href) ? { href } : { href: '#'}),
    ...((external) ?  { 
      rel: 'noreferrer',
        // As per comments in LinkItemDef
      target: (newTab !== undefined && (newTab === false)) ? '_self' : '_blank'
    } : {
      target: (newTab !== undefined && (newTab === true)) ? '_blank' : '_self' 
    }),
    ...(onClick ? { onClick } : {})
  }

  const iconn = (icon) ? icon : (def.icon) ? def.icon : undefined
  const iconnAfter = (iconAfter) ? iconAfter : (def.iconAfter) ? def.iconAfter : false

  return (
    <Link
      className={
          cn(buttonVariants({ 
            variant: variant ?  variant : (defVariant ? defVariant : 'link'), 
            size: (!defVariant || defVariant.includes('link') || variant?.includes('link'))  ? 'link' 
              : (size ? size : defSize)
          }), 
          (href ? '' : ' pointer-events-none') + 
          className 
        )}
      {...toSpread}
    >
      {iconn && !iconnAfter && (<div className='pr-1'>{iconn}</div>)}
      <div>{title}</div>
      {iconn && iconnAfter && (<div className='pl-1'>{iconn}</div>)}
    </Link>
  )
}

export default LinkElement
