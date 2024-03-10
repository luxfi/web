import React from 'react'

import { Footer } from '@luxdefi/common'
import { Main, TailwindIndicator } from '@hanzo/ui/primitives'

import siteDef from '@/site-def'

type LayoutProps = {
  children?: React.ReactNode
}

export async function generateMetadata() {
  return { title: 'Lux Store' }
}


const BuyPage = ({ children }: LayoutProps) => {

  // LEAVE: must override: p-4 md:px-6 lg:px-8 
  return (<>
    <Main /* id='LX_MKT_BUY_CAT_MAIN' */ className={ 
      'flex flex-row justify-center ' + 
      'min-h-[100vh] sm:min-h-[90vh] ' +
      'lg:min-w-screen-lg ' + 
      'max-w-screen-2xl 2xl:mx-auto ' + 
      'p-0 px-4'
    }>
      {children}
    </Main>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
    <TailwindIndicator />
  </>)
}

export default BuyPage
