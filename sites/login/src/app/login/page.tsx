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
      specifiers: 'center',
      columnSpecifiers: ['center vert-center mobile-vert-center'],
      contentColumns: [[
        {blockType: 'element', 
          element: (
            <Login 
              getStartedUrl='/' 
              returnToUrl='/' 
              redirectUrl={searchParams?.redirectUrl as string ?? undefined}
              className='w-full max-w-sm'
            />
          )
        } satisfies ElementBlock as Block,
      ]]
    } satisfies ScreenfulBlock as Block}
  />
)

export default LoginPage
