'use client'

import React from 'react'

import { Sheet, SheetContent, SheetTrigger } from '@/primitives/sheet'

const DrawerMenu: React.FC<{
  trigger: React.ReactNode
  Contents: React.ComponentType<{
    onAction: () => void
  }>,
  contentsProps?: any,
  className?: string
}> = ({
  trigger,
  Contents,
  contentsProps={},
  className=''
}) => {

  const [open, setOpen] = React.useState(false)

  const onAction = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen} >
      <SheetTrigger >
        {trigger}
      </SheetTrigger>
      <SheetContent side="right" className={className} onClick={onAction}>
        <Contents onAction={onAction} {...contentsProps} />
      </SheetContent>
    </Sheet>
  )
}

export default DrawerMenu
