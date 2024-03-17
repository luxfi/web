import React  from 'react'

import '@/blocks/registerComponents'

import CompareCards from '@/components/compare-cards'
import { Footer } from '@luxdefi/common'
import siteDef from '@/site-def'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (
    <>
      <CompareCards /> 
      <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
    </> 
  )
}

export default Page
