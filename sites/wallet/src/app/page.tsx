'use client'

import { observer } from 'mobx-react-lite'

import { AccessCodeInput, Footer, Main } from '@luxfi/core'
import { ApplyTypography } from '@hanzo/ui/primitives'
import { useAuth } from '@hanzo/auth/service'

import siteDef from '../site-def'
import { LoginPanel } from '@hanzo/auth/components'

const Home = observer(() => {
  const auth = useAuth()

  return (<>
    <Main className='h-screen -mt-[44px] md:-mt-[80px]'>
      <ApplyTypography className='flex flex-col gap-8 m-auto text-center'>
        <h1>MEMBER LOGIN</h1>
        {auth && (auth.loggedIn ? (
          <div className='flex flex-col gap-4 max-w-[40rem] mx-auto'>
            <h5>If you are an existing Lux member accessing this website for the first time, please enter your invite code.</h5>
            <AccessCodeInput/>
          </div>
        ) : (
          <LoginPanel noHeading className='max-w-[20rem] mx-auto' />
        ))}
      </ApplyTypography>
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
})

export default Home
