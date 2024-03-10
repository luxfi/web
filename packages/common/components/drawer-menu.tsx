'use client'
import React, { type PropsWithChildren, type ReactNode } from 'react'

import { X as LucideX} from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@hanzo/lc-ui/primitives'

import Logo from './logo'

const DrawerMenu: React.FC<PropsWithChildren & {
  trigger: ReactNode
  className?: string
  showLogo?: boolean,
  propogate?: boolean
  asChild?: boolean
}> = ({
  trigger,
  children,
  className='',
  showLogo=true,
  propogate=true,
  asChild=false
}) => {

  const [open, setOpen] = React.useState(false)

  const onAction = () => { setOpen(false) }

    // https://stackoverflow.com/a/49052730/11645689
  const updatedChildren = React.Children.map(
    children,
    (child) => (React.cloneElement(
      child as any, { onAction }
    ))
  )

  return (
    <Sheet open={open} onOpenChange={setOpen} >
      <SheetTrigger className={className} asChild={asChild}>
        {trigger}
      </SheetTrigger>
      <SheetContent 
        side="right" 
        closeButtonClass='text-inherit opacity-90' 
        onClick={propogate ? onAction : () => {}}
        closeElement={<LucideX className='h-6 w-6 text-inherit'/>}
        centerElement={showLogo ? <Logo size='xs' className='' /> : null}
      >
        {updatedChildren}
      </SheetContent>
    </Sheet>
  )
}

export default DrawerMenu
