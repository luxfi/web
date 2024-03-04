'use client'

import React from 'react'

import { Button } from '@hanzo/ui/primitives'
import { type EnhHeadingBlock, EnhHeadingBlockComponent } from '@hanzo/ui/blocks'

import { Cart } from '@hanzo/commerce/components'
import { useAuth } from '@hanzo/auth/service'
import { useCommerce } from '@hanzo/commerce'

const ChoosePaymentMethod: React.FC<{
  setPaymentMethod: (paymentMethod: 'crypto' | 'bank') => void,
  setStep: (step: number) => void
}> = ({
  setPaymentMethod, 
  setStep
}) => {
  const auth = useAuth()
  const cmmc = useCommerce()
  
  const continueStepper = (method: string) => {
    if (auth.user) {
      cmmc.createOrder(auth.user?.email, method)
    }
    setPaymentMethod(method as 'crypto' | 'bank')
    setStep(1)
  }

  return (<>
    <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
      specifiers: 'center',
      heading: { text: `FINALIZE PAYMENT` },
    } as EnhHeadingBlock}/>
    <Cart hideCheckout/>
    <div className='flex gap-4'>
      <Button onClick={() => continueStepper('crypto')} className='mx-auto rounded-full w-full max-w-[16rem]'>PAY WITH CRYPTO</Button>
      <Button onClick={() => continueStepper('bank')} className='mx-auto rounded-full w-full max-w-[16rem]'>BANK TRANSFER</Button>
    </div>
  </>)
}

export default ChoosePaymentMethod
