'use client'
import React, {type PropsWithChildren } from 'react'

import { X as LucideX} from 'lucide-react'

import { Button, Drawer, DrawerContent, type DrawerProps } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const CommerceDrawer: React.FC<PropsWithChildren & 
  Omit<DrawerProps, 'onOpenChange'> & 
  {
    setOpen: (b: boolean) => void
    drawerClx?: string
  }
> = ({
  children,
  open,
  setOpen,
  modal,
  drawerClx='',
  ...rest
}) => (
    // @ts-ignore
  <Drawer open={open} onOpenChange={setOpen} modal={modal} {...rest}>
    <DrawerContent className={cn(
      'rounded-t-xl mt-6 pt-6',
      drawerClx
    )}>
      {children}
      <Button
        variant='ghost'
        size='icon'
        onClick={() => {setOpen(false)}}
        className={'absolute top-4 right-4 w-8 h-8 group rounded-full p-1 hidden md:flex items-center'}
      >
        <LucideX className='w-6 h-6 text-muted group-hover:text-foreground'/>
      </Button>    
    </DrawerContent>
  </Drawer>
)


export default CommerceDrawer

