'use client'

import { useSearchParams } from 'next/navigation'

import { Footer } from '@hanzo/ui/common'
import { Main } from '@hanzo/ui/primitives'
import { ScreenfulBlockComponent as Screenful, type ElementBlock, type ScreenfulBlock } from '@hanzo/ui/blocks'
import { LoginComponent as Login } from '@hanzo/auth/components'
import siteDef from '@/siteDef'

const LoginPage = () => {
  const searchParams = useSearchParams()
  
  return (<>
    <Main className='md:flex-row md:gap-4 '>
      <Screenful 
        block={{blockType: 'screenful', contentColumns: [[
          {blockType: 'element', element: <Login getStartedUrl='/' returnToUrl='/' redirectUrl={searchParams.get('redirectUrl') ?? undefined}/>} as ElementBlock,
        ]]} as ScreenfulBlock} 
        className='w-full xs:w-full sm:max-w-[320px] sm:mx-auto'
      />
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default LoginPage
