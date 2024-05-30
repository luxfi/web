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
    mobile?: boolean
    micro?: boolean
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
  mobile=false,
  micro=false,
  ...rest
}) => (
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
    debugOutput
    {...rest}
  >
    <DrawerContent 
      defaultHandle={false} 
      className={cn(
        (modal  ? 'rounded-t-xl border-muted-2' : 'rounded-t-md border-muted-4' ),
        (micro ? (mobile ? 'mt-4 pt-1.5' : 'mt-5 pt-4') : 'mt-5 pt-5'),
        'w-full h-full'
      )}
    >
      <DrawerHandle 
        className={cn(
          'absolute left-0 right-0 mx-auto z-10',
          'bg-level-3 hover:bg-level-2',
          !mobile ? 'cursor-grab active:cursor-grabbing' : 'touch-pan-y',
          (micro ? (mobile ? 'top-1 w-[85px] h-2 rounded-[2px]' : 'top-2 w-[85px] h-3 rounded-[2px]') : 'top-2 w-[100px] h-3 rounded-full'),
          '[&>[vaul-handle-hitarea]]:hidden',
          //(!micro ? 'bg-level-3 hover:bg-level-2 ' : 'bg-level-1 hover:bg-level-2 ')
        )} 
      />
      {children}
    </DrawerContent>
  </Drawer>
)

export default CommerceDrawer
