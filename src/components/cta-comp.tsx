'use client'

import React from 'react'
import Link from "next/link"

import { cn } from "@/util"
import { buttonVariants } from '@/primitives/button'
import DialogVideoController from '@/primitives/dialog-video-controller'
import { type CTABlock } from '@/content/types'

const CTAComponent: React.FC<{
  cta: CTABlock
}> = ({
  cta
}) => {

  return (
  <>
  {cta.items.map((item, iindex) => {
    if (item.Modal) {
      const { 
        Modal, 
        trigger, 
        modalTitle: title,
        modalByline: byline,        
        modalProps,
        //modalSubmit: onSubmit
      } = item
      return (
        <DialogVideoController 
          renderDialog={({open, onOpenChange}) => (
            <Modal 
              open={open} 
              onOpenChange={onOpenChange} 
              trigger={trigger}
              title={title}
              byline={byline} 
              {...modalProps}
              //onSubmit={onSubmit}
            />
          )} 
          key={iindex} 
        />
      )
    }
    return (
      (!item.variant || item.variant === 'link') ? (
        <Link
          key={iindex}
          href={item.href!}
          className={cn(
            "flex items-center text-medium font-medium text-muted-foreground hover:text-foreground",
            item.disabled && "cursor-not-allowed opacity-80 hover:text-muted-foreground"
          )}
        >
          {item.title}
        </Link>
      ) : (
        <Link
          target="_blank"
          rel="noreferrer"
          key={iindex}
          href={item.href!}
          className={buttonVariants({ variant: item.variant, size: 'lg' })}
        >
          {item.title}
        </Link>
      )
    )
  })}
  </>
)
}
  /*
    (!item.variant || item.variant === 'link') ? (
      <Link
        key={iindex}
        href={item.href!}
        className={cn(
          "flex items-center text-medium font-medium text-muted-foreground hover:text-foreground",
          item.disabled && "cursor-not-allowed opacity-80 hover:text-muted-foreground"
        )}
      >
        {item.title}
      </Link>
    ) : (
      <Link
        target="_blank"
        rel="noreferrer"
        key={iindex}
        href={item.href!}
        className={buttonVariants({ variant: item.variant, size: 'lg' })}
      >
        {item.title}
      </Link>
    )
  

*/
export default CTAComponent