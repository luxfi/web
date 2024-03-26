'use client'
import React from 'react'

import { Drawer, DrawerContent} from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import BagPanel from './bag-panel'

const bagClx = 'mt-4 mb-8 border-none py-0 px-4 w-full ' +
  'sm:min-w-[350px] sm:max-w-[500px] sm:mx-auto min-h-[60vh] max-h-[70vh]'

const MobileBagDrawer: React.FC<{
  open: boolean,
  setOpen: (b: boolean) => void
  handleCheckout: () => void
  className?: string
}> = ({
  open,
  setOpen,
  handleCheckout,
  className='',
}) => (
  <Drawer open={open} onOpenChange={setOpen}>
    <DrawerContent className={cn('rounded-tl-xl rounded-tr-xl p-0 pt-3 ', className)} >
      <BagPanel handleCheckout={handleCheckout} className={bagClx}/>
    </DrawerContent>
  </Drawer>
)

export default MobileBagDrawer
