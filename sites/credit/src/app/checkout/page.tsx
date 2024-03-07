'use client'

import { useEffect, useState }  from 'react'

import { Footer } from '@hanzo/ui/common'
import { Main, Separator } from '@hanzo/ui/primitives'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'

import siteDef from '../../siteDef'
import { EnhHeadingBlockComponent, type EnhHeadingBlock } from '@hanzo/ui/blocks'
import { Cart } from '@hanzo/commerce/components'
import { cn } from '@hanzo/ui/util'
import ShippingInfo from './shipping-info'
import ThankYou from './thank-you'
import { useAuth } from '@hanzo/auth/service'
import PayWithCrypto from './pay-with-crypto'
import PayByBankTransfer from './pay-by-bank-transfer'
import { useCommerce } from '@hanzo/commerce'
import ContactInfo from './contact-info'
import { LoginComponent } from '@hanzo/auth/components'
import { observer } from 'mobx-react-lite'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email(),
})

const CheckoutPage = observer(() => {
  const auth = useAuth()
  const cmmc = useCommerce()
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'bank' | undefined>()
  const [orderId, setOrderId] = useState<string>()

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(contactFormSchema),  
    defaultValues: {
      name: auth.user?.displayName ?? '',
      email: auth.user?.email ?? '',
    },
  })

  useEffect(() => {
    if (auth.loggedIn) {
      contactForm.setValue('name', auth.user?.displayName ?? '')
      contactForm.setValue('email', auth.user?.email ?? '')
    }
  }, [auth.loggedIn])

  const selectPaymentMethod = async (method: 'crypto' | 'bank') => {
    contactForm.handleSubmit(async () => {
      if (auth.user) {
        if (!!orderId) {
          await cmmc.updateOrder(orderId, auth.user.email, method)
        } else {
          const id = await cmmc.createOrder(auth.user.email, method)
          setOrderId(id)
        }
      }
      setPaymentMethod(method)
      setCurrentStep(2)
    })()    
  }


  const step1 = auth.loggedIn ? (
    <ContactInfo form={contactForm} selectPaymentMethod={selectPaymentMethod}/>
  ) : (
    <LoginComponent hideHeader className='max-w-[20rem] mx-auto'/>
  )

  const step2 = paymentMethod === 'crypto' ? (
    <PayWithCrypto setCurrentStep={setCurrentStep}/>
  ) : (
    <PayByBankTransfer setCurrentStep={setCurrentStep}/>
  )

  const step3 = (
    <ShippingInfo orderId={orderId} paymentMethod={paymentMethod} setCurrentStep={setCurrentStep}/>
  )

  const step4 = <ThankYou/>

  const steps = [step1, step2, step3, step4]

  return (<>
    <Main className='grid grid-cols-5 justify-center gap-8'>
      <Cart hideCheckout className='col-span-2 hidden md:flex justify-center border-none'/>

      <div className='flex flex-col gap-14 col-span-5 md:col-span-3 max-w-[40rem] mx-auto'>
        <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
          specifiers: 'center',
          heading: { text: `FINALIZE PAYMENT`, level: 3 },
        } as EnhHeadingBlock}/>
        <div className='flex gap-2 mx-auto items-center text-xs sm:text-base'>
          <div className={cn('w-6 h-6 rounded-full border border-foreground flex justify-center items-center', currentStep === 1 ? 'bg-foreground text-muted-4' : '')}>
            1
            <div className='absolute mt-14 text-foreground'>Contact info</div>
          </div>
          <Separator className='w-[4rem] sm:w-[6rem]'/>
          <div className={cn('w-6 h-6 rounded-full border border-foreground flex justify-center items-center', currentStep === 2 ? 'bg-foreground text-muted-4' : '')}>
            2
            <div className='absolute mt-14 text-foreground'>Payment</div>
          </div>
          <Separator className='w-[4rem] sm:w-[6rem]'/>
          <div className={cn('w-6 h-6 rounded-full border border-foreground flex justify-center items-center', currentStep === 3 ? 'bg-foreground text-muted-4' : '')}>
            3
            <div className='absolute mt-14 text-foreground'>Shipping info</div>
          </div>
        </div>
        {steps[currentStep - 1]}
      </div>
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto' />
  </>)
})

export default CheckoutPage
