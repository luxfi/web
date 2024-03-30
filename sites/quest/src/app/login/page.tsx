import React  from 'react'

import { Footer } from '@luxdefi/common'
import { Main } from '@hanzo/ui/primitives'
import siteDef from '@/site-def'
import { ScreenfulBlockComponent as Screenful, type ElementBlock, type ScreenfulBlock } from '@hanzo/ui/blocks'
import { LoginPanel as Login } from '@hanzo/auth/components'

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
