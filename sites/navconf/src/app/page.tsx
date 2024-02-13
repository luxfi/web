import React  from 'react'

import { Footer, Header } from '@luxdefi/ui/common'
import { TailwindIndicator, Main } from '@luxdefi/ui/primitives'

import { ContentComponent as Content } from '@luxdefi/ui/blocks'

import siteDef from '@/siteDef'
import blocks from '@/content'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<>
    <Header siteDef={siteDef} className='fixed left-0 right-0 z-50'/>
      <Main className='pt-[56px] md:pt-[104px] max-w-scree n-lg'>
        <Content blocks={blocks} agent={agent}/>
      </Main>
      <div className='border-t'></div>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 2xl:mx-auto ' />
    <TailwindIndicator />
  </>)
}

export default Page
