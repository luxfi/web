import React, { Suspense, type PropsWithChildren } from 'react'

import { Main } from '@hanzo/ui/primitives'
import { Header, Footer } from '@luxdefi/common'

import siteDef from '../../site-def'

const Layout: React.FC<PropsWithChildren> = async ({
  children
}) => (<>
  <Header siteDef={siteDef}/>
  <Main className='md:flex-row md:gap-4 '>
    <Suspense>{children}</Suspense>
  </Main>
  <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
</>)

export default Layout