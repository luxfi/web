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
    target,
    variant,
    title
  } = item

  const toSpread = {
    ...((href) ? { href } : { href: '#'}),
    ...((external) ?  { rel: "noreferrer" } : {}),
    ...((target) ? { target } : {}),
  }

  return (
    <Link
      className={cn(buttonVariants({ 
          variant: variant ?  variant : 'link', 
          size: (!variant || variant.includes('link'))  ? 'link' : size
        }), 
        extraClasses + (href ? '' : ' pointer-events-none')
      )}
      {...toSpread}
    >
      {title}
    </Link>
  )
}

export default LinkItem
