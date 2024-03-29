import React, { Suspense, type PropsWithChildren } from 'react'

import { Main } from '@hanzo/ui/primitives'
import { Footer } from '@luxdefi/common'

import siteDef from '../../site-def'

const Layout: React.FC<PropsWithChildren> = async ({
  children
}) => (<>
  <Main className='w-full'>
    <Suspense>{children}</Suspense>
  </Main>
  <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto' />
</>)

export default Layout