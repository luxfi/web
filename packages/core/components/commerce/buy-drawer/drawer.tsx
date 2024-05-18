'use client'
import React, {type PropsWithChildren } from 'react'

import { X as LucideX} from 'lucide-react'

import { 
  Button, 
  Drawer, 
  DrawerContent, 
  DrawerHandle,
  type DrawerProps,
} from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import '../../../style/drawer-handle-overrides.css'

const CommerceDrawer: React.FC<PropsWithChildren & 
  Omit<DrawerProps, 'onOpenChange'> & 
  {
    setOpen: (b: boolean) => void
    handleHandleClicked: () => void
    drawerClx?: string
  }
> = ({
  children,
  open,
  setOpen,
  modal,
  snapPoints,
  setActiveSnapPoint,
  activeSnapPoint,
  handleHandleClicked,
  drawerClx='',
  ...rest
}) => {
  
 
  return (
    // @ts-ignore
  <Drawer 
    open={open} 
    onOpenChange={setOpen} 
    modal={modal} 
    snapPoints={snapPoints}
    setActiveSnapPoint={setActiveSnapPoint}
    activeSnapPoint={activeSnapPoint}
    fastDragSkipsToEnd={false}
    dragHandleOnly={true}
    handleHandleClicked={handleHandleClicked}
    {...rest}
  >
    <DrawerContent defaultHandle={false} className={cn(
      'rounded-t-xl mt-6 pt-6',
      drawerClx
    )}>

      <DrawerHandle 
        className={
          'absolute left-0 right-0 mx-auto top-2 ' + 
          'w-[100px] h-3 rounded-full bg-level-3 hover:bg-level-2 ' + 
          'cursor-grab active:cursor-grabbing touch-pan-y'
        } 
      />

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
}


export default CommerceDrawer

