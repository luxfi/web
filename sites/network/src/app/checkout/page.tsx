'use client'

import React from 'react'

import { Main } from '@hanzo/ui/primitives'
import { CheckoutPanel, Footer, Header } from '@luxfi/common'
import siteDef from '@/conf/site-def'

const Page: React.FC = () => {
  return (<>
    <Header siteDef={siteDef}/>
    <Main id='CHECKOUT_MAIN' className='!py-0'>
      <CheckoutPanel className='w-full h-full'/>
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default Page
