import React  from 'react'

import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'
import { Footer } from '@luxdefi/common'

import Header from '@/components/header'
import tiles from '@/content'

import siteDef from '../site-def'


type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

  // Scroll Snap using this is the approach: 
  // https://stackoverflow.com/a/76066443/11645689
  // see also styles on 'html' in @hanzo/ui/style/global.css

  const Page = ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<>
    <Header siteDef={siteDef} className='fixed left-0 right-0 z-50'/>
    {tiles.map((banner, index) => (
      <Screenful 
        block={banner} 
        initialInView={index === 0} 
        agent={agent}
        key={`section-${index}`} 
      />
    ))}
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default Page
