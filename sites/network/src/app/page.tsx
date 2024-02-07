import React  from 'react'

import { Footer, Header } from '@luxdefi/ui/common'

import { ScreenfulBlockComponent as Screenful } from '@luxdefi/ui/blocks'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

import siteDef from '../siteDef'

import tiles from '@/content'


  // Scroll Snap using this is the approach: 
  // https://stackoverflow.com/a/76066443/11645689
  // see also styles on 'html' in @luxdefi/ui/style/global.css

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
        snapTile
        key={`section-${index}`} 
      />
    ))}
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default Page
