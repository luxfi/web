import React  from 'react'

import { Footer } from '@luxdefi/common'
import { Main } from '@hanzo/ui/primitives'

import siteDef from '@/site-def'

type LayoutProps = {
  children?: React.ReactNode
}

export async function generateMetadata() {
  return { title: 'Buy Lux Cards' }
}


const BuyLayout = ({ children }: LayoutProps) => {

  // LEAVE: must override: p-4 md:px-6 lg:px-8 

  return (<>
    <Main className='max-w-screen-xl w-full pt-16 sm:pt-4 portrait:pt-4 lx:mx-auto relative'>
      {children}
    </Main>
    <div className='border-t'></div>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default BuyLayout
