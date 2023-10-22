import React from "react"
import Link from "next/link"

import type LinkItemDef  from '@/content/types/link-item-def'
import { cn } from "@/util"
import { buttonVariants, type ButtonSizes } from '@/primitives/button'
import DialogVideoController from '@/primitives/dialog-video-controller'

const LinkItem: React.FC<{
  item: LinkItemDef,
  size?: ButtonSizes 
  extraClasses?: string
}> = ({ 
  item,
  size = 'lg',
  extraClasses = ''
} ) => {

    // See notes in content/types/link-item-def
  const { component } = item

  if (component) {

    const { 
      Modal, 
      modalTitle: title,
      modalByline: byline,        
      modalProps,
    } = item

    if (Modal) {
      return (
        <DialogVideoController 
          renderDialog={({open, onOpenChange}) => (
            <Modal 
              open={open} 
              onOpenChange={onOpenChange} 
              trigger={component}
              title={title}
              byline={byline} 
              {...modalProps}
              //onSubmit={onSubmit}
            />
          )} 
        />
      )
    }
    return component as React.ReactElement
  }

  const {
    href,
    external,
    newTab,
    variant,
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
          size: (!variant || variant.includes('ink'))  ? 'link' : size
        }), 
        extraClasses 
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
