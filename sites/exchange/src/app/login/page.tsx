import React  from 'react'

import { 
  ScreenfulBlockComponent as Screenful, 
  type ElementBlock, 
  type ScreenfulBlock 
} from '@hanzo/ui/blocks'
import { Main } from '@hanzo/ui/primitives'

import { LoginComponent as Login } from '@hanzo/auth/components'

import { Footer } from '@luxdefi/common'

import siteDef from '@/site-def'

const LoginPage = () => {
  return (<>
    <Main className='md:flex-row md:gap-4 '>
      <Screenful 
        block={{blockType: 'screenful', contentColumns: [[
          {blockType: 'element', element: <Login getStartedUrl='/' returnToUrl='/'/>} as ElementBlock,
        ]]} as ScreenfulBlock} 
        className='w-full max-w-[30rem] mx-auto'
      />
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default LoginPage
