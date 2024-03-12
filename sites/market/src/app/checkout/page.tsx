'use client'

import React, { useState }  from 'react'
import { redirect } from 'next/navigation'


import { Footer } from '@luxdefi/common'

import { Main } from '@hanzo/ui/primitives'
import { useAuth } from '@hanzo/auth/service'

import siteDef from '../../site-def'
import PayByBankTransfer from './pay-by-bank-transfer'
import PayWithCrypto from './pay-with-crypto'
import ThankYou from './thank-you'
import ChoosePaymentMethod from './choose-payment-method'

const CheckoutPage: React.FC = () => {

  const auth = useAuth()
  const [orderId, setOrderId] = useState<string>()
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'bank'>()
  const [step, setStep] = useState(0)

  if (!(auth.loggedIn)) {
    redirect('/login')
  }

  return (<>
    <Main className='gap-8 md:gap-14 flex flex-col justify-center'>
      {step === 0 ? (
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
      )}
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto' />
  </>)
}

export default CheckoutPage
