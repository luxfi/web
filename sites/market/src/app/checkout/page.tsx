'use client'

import { useState }  from 'react'

import { Footer } from '@hanzo/ui/common'
import { Main } from '@hanzo/ui/primitives'

import siteDef from '../../siteDef'
import PayByBankTransfer from './pay-by-bank-transfer'
import PayWithCrypto from './pay-with-crypto'
import { useAuth } from '@hanzo/auth/service'
import { redirect } from 'next/navigation'
import ThankYou from './thank-you'
import ChoosePaymentMethod from './choose-payment-method'

const CheckoutPage = () => {

  const auth = useAuth()
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'bank'>()
  const [step, setStep] = useState(0)

  if (!auth.loggedIn) {
    redirect('/login')
  }

  return (<>
    <Main className='gap-8 md:gap-14 flex flex-col justify-center'>
      {step === 0 ? (
        <ChoosePaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} setStep={setStep}/>
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
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default CheckoutPage
