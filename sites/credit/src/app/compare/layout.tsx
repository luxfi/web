import React, { type PropsWithChildren } from 'react'

import { Header, Footer } from '@luxfi/core'

import siteDef from '@/site-def'

const Layout: React.FC<PropsWithChildren> = async ({
  children
}) => (<>
  <Header siteDef={siteDef}/>
    {children}
   <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />
</>)

export default Layout
