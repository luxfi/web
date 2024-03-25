import React  from 'react'

import '@/blocks/registerComponents'

import CompareCards from '@/components/compare-cards'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (
    <CompareCards /> 
  )
}

export default Page
