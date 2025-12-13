import React  from 'react'

// Use local Main to avoid Firebase imports from @luxfi/ui
import MainNoAuth from '@/components/main-no-auth'
// Block registration moved to DynamicScreenful (client-side)

import CompareCards from './_page'

interface PageProps {
  searchParams?: Promise<{ [key: string]: string }>
}

const Page = async ({ searchParams }: PageProps) => {
  const resolvedSearchParams = await searchParams
  
  const predefinedCards = resolvedSearchParams?.cards
  const mobile = resolvedSearchParams?.agent === 'phone'

  return (
    <MainNoAuth>
      <CompareCards predefinedCards={predefinedCards} mobile={mobile}/>
    </MainNoAuth>
  )
}

export default Page
