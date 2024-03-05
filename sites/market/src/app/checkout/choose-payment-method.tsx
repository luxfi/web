'use client'

import { Button } from '@hanzo/ui/primitives'
import { type EnhHeadingBlock, EnhHeadingBlockComponent } from '@hanzo/ui/blocks'

import { Cart } from '@hanzo/commerce/components'
import { useAuth } from '@hanzo/auth/service'
import { useCommerce } from '@hanzo/commerce'

const ChoosePaymentMethod: React.FC<{
  setPaymentMethod: (paymentMethod: 'crypto' | 'bank') => void,
  setStep: (step: number) => void,
  orderId?: string,
  setOrderId: (orderId?: string) => void
}> = ({
  setPaymentMethod, 
  setStep,
  orderId,
  setOrderId
}) => {
  const auth = useAuth()
  const cmmc = useCommerce()
  
  const selectPaymentMethod = async (method: string) => {
    if (auth.user) {
      if (!!orderId) {
        await cmmc.updateOrder(orderId, auth.user.email, method)
      } else {
        const id = await cmmc.createOrder(auth.user.email, method)
        setOrderId(id)
      }
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
    <div className='flex flex-col sm:flex-row gap-4'>
      <Button
        onClick={() => selectPaymentMethod('crypto')}
        className='mx-auto rounded-full w-full max-w-[16rem]'
      >
        PAY WITH CRYPTO
      </Button>
      <Button
        onClick={() => selectPaymentMethod('bank')}
        className='mx-auto rounded-full w-full max-w-[16rem]'
      >
        BANK TRANSFER
      </Button>
    </div>
  </>)
}

export default ChoosePaymentMethod
