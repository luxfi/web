import React from "react"
import Link from "next/link"

import type LinkItemDef  from '@/content/types/link-item-def'
import { cn } from "@/util"
import { buttonVariants, type ButtonSizes } from '@/primitives/button'
import DialogVideoController from '@/primitives/dialog-video-controller'

const LinkItem: React.FC<{
  item: LinkItemDef,
  size?: ButtonSizes 
  className?: string
}> = ({ 
  item,
  size = 'lg',
  className = ''
} ) => {

    // See notes in content/types/link-item-def
  const { component, modal } = item

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

  const {
    href,
    external,
    newTab,
    variant,
    size: defSize, 
    title
  } = item

  const toSpread = {
    ...((href) ? { href } : { href: '#'}),
    ...((external) ?  { 
      rel: "noreferrer",
        // As per comments in LinkItemDef
      target: (newTab !== undefined && (newTab === false)) ? '_self' : '_blank'
    } : {
      target: (newTab !== undefined && (newTab === true)) ? '_blank' : '_self' 
    }),
  }

  return (
    <Link
      className={cn(buttonVariants({ 
          variant: variant ?  variant : 'link', 
          size: (!variant || variant.includes('ink'))  ? 'link' 
            : (size ? size : defSize)
        }), 
        className 
          + (href ? '' : ' pointer-events-none')
          + (item.icon ? ' color-foreground hover:color-muted-foreground' : '')
      )}
      {...toSpread}
    >
      {item.icon && (<div className='pr-1'>{item.icon}</div>)}
      {title}
    </Link>
  )
}

export default LinkItem
