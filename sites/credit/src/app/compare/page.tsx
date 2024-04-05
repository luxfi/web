import React  from 'react'

import '@/blocks/registerComponents'

import CompareCards from '@/components/compare-cards'

type Props = {
  searchParams?: { [key: string]: string }
}

const Page = ({ searchParams }: Props) => {
  
  const predefinedCards = searchParams?.cards

  return (
    <CompareCards predefinedCards={predefinedCards}/> 
  )
}

export default Page
