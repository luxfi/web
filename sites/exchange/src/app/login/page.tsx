'use client'

import React  from 'react'
import { Footer } from '@hanzo/ui/common'
import { Button, Main } from '@hanzo/ui/primitives'
import siteDef from '@/siteDef'
import { signIn } from 'next-auth/react'

const LoginPage = () => {
  return (<>
    <Main className='md:flex-row md:gap-4 '>
      <Button onClick={() => signIn('google')}>Login</Button>
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default LoginPage
