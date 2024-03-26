'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { Main } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { CheckoutPanel } from '@luxdefi/common'

const Page: React.FC = () => {

  const router = useRouter()

  const handleCheckoutDone = () => {
    router.back()
  }
  
  return (
    <Main  className={cn(
      '!px-0 !py-0',
      'w-full h-[100vh] !max-w-none',
      'animate-in md:zoom-in-90',
      'shadow-lg bg-background'
    )}>
      <CheckoutPanel close={handleCheckoutDone} className='w-full h-full' />
    </Main>
  )
}

export default Page
