'use client'

import { useState }  from 'react'

import { Footer } from '@hanzo/ui/common'
import { Main, Separator } from '@hanzo/ui/primitives'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'

import siteDef from '../../siteDef'
import { EnhHeadingBlockComponent, type EnhHeadingBlock } from '@hanzo/ui/blocks'
import { Cart } from '@hanzo/commerce/components'
import { cn } from '@hanzo/ui/util'
import PaymentInfo from './payment-info'
import ShippingInfo from './shipping-info'
import ThankYou from './thank-you'
import { useAuth } from '@hanzo/auth/service'
import PayWithCrypto from './pay-with-crypto'
import PayByBankTransfer from './pay-by-bank-transfer'
import { useCommerce } from '@hanzo/commerce'

const paymentFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email(),
})

const shippingFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters.'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters.'),
  addressLine1: z.string().min(2, 'Address must be at least 2 characters.'),
  addressLine2: z.string().optional(),
  zipCode: z.string().min(2, 'Zip code is invalid.'),
  city: z.string().min(2, 'City is invalid.'),
  state: z.string().optional(),
  country: z.string().min(2, 'Country is invalid.'),
})

const CheckoutPage = () => {
  const auth = useAuth()
  const cmmc = useCommerce()
  const [step, setStep] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'bank' | undefined>()
  const [orderId, setOrderId] = useState<string>()

  // if (!auth.loggedIn) {
  //   redirect('/login')
  // }

  const paymentForm = useForm<z.infer<typeof paymentFormSchema>>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const shippingForm = useForm<z.infer<typeof shippingFormSchema>>({
    resolver: zodResolver(shippingFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      zipCode: '',
      city: '',
      state: '',
      country: '',
    },
  })

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

  const onShippingFormSubmit = async (values: z.infer<typeof shippingFormSchema>) => {
    if (auth.user) {
      await cmmc.updateOrder(orderId!, auth.user.email, paymentMethod!, values)
    }
    setStep(3)
  }

  return (<>
    <Main className='grid grid-cols-5 justify-center gap-8'>
      <Cart hideCheckout className='col-span-2 hidden md:flex'/>

      <div className='flex flex-col gap-14 col-span-5 md:col-span-3 max-w-[40rem] mx-auto'>
        <EnhHeadingBlockComponent block={{blockType: 'enh-heading',
          specifiers: 'center',
          heading: { text: `FINALIZE PAYMENT`, level: 3 },
        } as EnhHeadingBlock}/>
        <div className='flex gap-2 mx-auto items-center text-xs sm:text-base'>
          <div className={cn('w-6 h-6 rounded-full border border-foreground flex justify-center items-center', step === 0 ? 'bg-foreground text-muted-4' : '')}>
            1
            <div className='absolute mt-14 text-foreground'>Contact info</div>
          </div>
          <Separator className='w-[4rem] sm:w-[6rem]'/>
          <div className={cn('w-6 h-6 rounded-full border border-foreground flex justify-center items-center', step === 1 ? 'bg-foreground text-muted-4' : '')}>
            2
            <div className='absolute mt-14 text-foreground'>Payment</div>
          </div>
          <Separator className='w-[4rem] sm:w-[6rem]'/>
          <div className={cn('w-6 h-6 rounded-full border border-foreground flex justify-center items-center', step === 2 ? 'bg-foreground text-muted-4' : '')}>
            3
            <div className='absolute mt-14 text-foreground'>Shipping info</div>
          </div>
        </div>

        {step === 0 ? (
          <PaymentInfo form={paymentForm} selectPaymentMethod={selectPaymentMethod}/>
        ) : step === 1 ? (
          <>
            {paymentMethod === 'crypto' ? (
              <PayWithCrypto setStep={setStep}/>
            ) : (
              <PayByBankTransfer setStep={setStep}/>
            )}
          </>
        ) : step === 2 ? (
          <ShippingInfo setStep={setStep} form={shippingForm} formSchema={shippingFormSchema} onSubmit={onShippingFormSubmit}/>
        ) : (
          <ThankYou/>
        )}
      </div>

      {/* {step === 0 ? (
        <ChoosePaymentMethod
          setPaymentMethod={setPaymentMethod}
          setStep={setStep}
          orderId={orderId}
          setOrderId={setOrderId}
        />
      ) : step === 1 ? (
        <>
          {paymentMethod === 'crypto' ? (
            <PayWithCrypto setStep={setStep}/>
          ) : paymentMethod === 'bank' ? (
            <PayByBankTransfer setStep={setStep}/>
          ) : null}
        </>
      ) : (
        <ThankYou/>
      )} */}
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto' />
  </>)
}

export default CheckoutPage
