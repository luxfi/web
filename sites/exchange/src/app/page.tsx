'use client'

import React  from 'react'
import { observer } from 'mobx-react-lite'

import { ApplyTypography } from '@hanzo/ui/primitives'
import { useAuth } from '@hanzo/auth/service'
import { LoginPanel } from '@hanzo/auth/components'

import { AccessCodeInput, Footer, Main } from '@luxfi/core'

import siteDef from '../site-def'
import { useRouter } from 'next/navigation'

const Home = observer(() => {
  const router = useRouter()
  const auth = useAuth()

  const validCodes = ['777777']

  const redirectToApp = () => {
    if (typeof window !== 'undefined') {
      const { protocol, hostname } = window.location
      const newHostname = `app.${hostname}`
      router.push(`${protocol}//${newHostname}`)
    }
  }

  return (<>
    <Main className='h-screen -mt-[44px] md:-mt-[80px]'>
      <ApplyTypography className='flex flex-col gap-8 m-auto text-center'>
        <h1>MEMBER LOGIN</h1>
        {auth.loggedIn ? (
          <div className='flex flex-col gap-4 max-w-[40rem] mx-auto'>
            <h5>If you are an existing Lux member accessing this website for the first time, please enter your invite code.</h5>
            <AccessCodeInput validCodes={validCodes} onSuccess={redirectToApp}/>
          </div>
        ) : (
          <LoginPanel noHeading className='max-w-[20rem] mx-auto' />
        )}
      </ApplyTypography>
    </Main>
    <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />
  </>)
})

export default Home
