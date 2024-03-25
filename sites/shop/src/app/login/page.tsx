import React from 'react'

import { 
  ScreenfulBlockComponent as Screenful, 
  type ElementBlock, 
  type ScreenfulBlock, 
  type Block 
} from '@hanzo/ui/blocks'

import { LoginComponent as Login } from '@hanzo/auth/components'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const LoginPage = ({ searchParams }: Props) => (
  <Screenful 
    block={{blockType: 'screenful', 
      contentColumns: [[
        {blockType: 'element', 
          element: (
            <Login 
              getStartedUrl='/' 
              returnToUrl='/' 
              redirectUrl={searchParams?.redirectUrl as string ?? undefined}
            />
          )
        } satisfies ElementBlock as Block,
      ]]
    } satisfies ScreenfulBlock as Block} 
    className='w-full xs:w-full sm:max-w-[320px] sm:mx-auto'
  />
)

export default LoginPage
