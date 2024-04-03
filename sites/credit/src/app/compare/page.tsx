import React  from 'react'

import '@/blocks/registerComponents'

import CompareCards from '@/components/compare-cards'

type Props = {
  searchParams?: { [key: string]: string }
}

const Page = ({ searchParams }: Props) => {
  return (
    <CompareCards predefinedCards={searchParams?.cards}/> 
  )
}

export default Page
