import React  from 'react'

import { Footer, Header } from '@luxdefi/ui/common'

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
      <Content blocks={blocks} agent={agent}/>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default Page
