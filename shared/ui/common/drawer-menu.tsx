'use client'
import React, { type PropsWithChildren } from 'react'

import { Sheet, SheetContent, SheetTrigger } from '@/primitives/sheet'
import Icons from '@/components/icons'

const DrawerMenu: React.FC<PropsWithChildren & {
  triggerIcon: keyof typeof Icons
  triggerProps?: any
  className?: string
}> = ({
  triggerIcon,
  triggerProps,
  children,
  className=''
}) => {

  const [open, setOpen] = React.useState(false)

  const onAction = () => { setOpen(false) }
  const Icon = Icons[triggerIcon]

    // https://stackoverflow.com/a/49052730/11645689
  const updatedChildren = React.Children.map(
    children,
    (child) => (React.cloneElement(
      child as any, { onAction }
    ))
  )

  return (
    <Sheet open={open} onOpenChange={setOpen} >
      <SheetTrigger>
        <Icon {...triggerProps} />
      </SheetTrigger>
      <SheetContent side="right" className={className} closeButtonClass='text-inherit opacity-90' onClick={onAction}>
        {updatedChildren}
      </SheetContent>
    </Sheet>
  )
}

export default DrawerMenu
