import React from 'react'
import Link from 'next/link'

import type { LinkDef }  from '@/types'
import { buttonVariants, type ButtonSizes, type ButtonVariants } from '@/primitives/button'
//import DialogVideoController from '@/primitives/dialog-video-controller'
import { cn } from '@/util'

const LinkElement: React.FC<{
  def: LinkDef,
  variant? : ButtonVariants
  size?: ButtonSizes 
  onClick?: () => void // for UI changes in addition to link (eg, close menu)
  className?: string
}> = ({ 
  def,
  size = 'lg',
  onClick,
  variant,
  className = ''
} ) => {

    /*
  const { component, modal } = def

  if (component) {

    if (modal) {

      const {
        Comp,
        title,
        props,
        byline,
        action,
        actionEnclusure
      } = modal

      return (
        <DialogVideoController 
          renderDialog={({open, onOpenChange}) => (
            <Comp 
              open={open} 
              onOpenChange={onOpenChange} 
              trigger={component}
              title={title}
              byline={byline} 
              onSubmit={action}
              submitEnclosure={actionEnclusure}
              {...props}
            />
          )} 
        />
      )
    }
      // if no modal, then just render the component
    return component as React.ReactElement
  }
*/
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

  

  return (
    <Link
      className={cn(buttonVariants({ 
          variant: variant ?  variant : (defVariant ? defVariant : 'link'), 
          size: (!defVariant || defVariant.includes('link') || variant?.includes('link'))  ? 'link' 
            : (size ? size : defSize)
        }), 
        className 
          + (href ? '' : ' pointer-events-none')
          + (def.icon ? ' color-foreground hover:color-muted-foreground' : '')
      )}
      {...toSpread}
    >
      {def.icon && (<div className='pr-1'>{def.icon}</div>)}
      {title}
    </Link>
  )
}

export default LinkElement
