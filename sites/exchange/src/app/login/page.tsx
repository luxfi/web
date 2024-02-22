import React  from 'react'

import { Footer } from '@hanzo/ui/common'
import { Main } from '@hanzo/ui/primitives'
import siteDef from '@/siteDef'
import { 
  ScreenfulBlockComponent as Screenful, 
  type ElementBlock, 
  type ScreenfulBlock, 
  type Block 
} from '@hanzo/ui/blocks'

import AuthUiComponent from '@/components/AuthUiComponent'

const LoginPage = () => {
  return (<>
    <Main className='md:flex-row md:gap-4 '>
      <Screenful 
        block={{blockType: 'screenful', 
          contentColumns: [[
            {blockType: 'element', 
              element: <AuthUiComponent redirectUrl='/' getStartedUrl='/'/>
            } satisfies ElementBlock as Block,
          ]]
        } satisfies ScreenfulBlock as Block} 
        className='w-full max-w-[30rem] mx-auto'
      />
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default LoginPage
