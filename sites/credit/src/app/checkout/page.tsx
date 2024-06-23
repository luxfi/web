import React from 'react'

import { cn } from '@hanzo/ui/util'
import { CheckoutPanel, Main } from '@luxfi/core'

const Page: React.FC = () => (
  <Main id='CHECKOUT_MAIN' className={cn(
    '!px-0 !py-0',
    'w-full h-[100vh]',
    'animate-in md:zoom-in-90',
    'shadow-lg bg-background'
  )}>
    <CheckoutPanel clx='w-full h-full' />
  </Main>
)

export default Page