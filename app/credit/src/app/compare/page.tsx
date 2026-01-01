'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'

// Dynamic imports with SSR disabled to avoid React bundling issues
const MainNoAuth = dynamic(() => import('@/components/main-no-auth'), { ssr: false })
const CompareCards = dynamic(() => import('./_page'), { ssr: false })

const ComparePageContent = () => {
  const searchParams = useSearchParams()
  const [mobile, setMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  const predefinedCards = searchParams.get('cards') || undefined

  useEffect(() => {
    setMounted(true)
    // Detect mobile client-side
    const isMobile = window.innerWidth < 768 || searchParams.get('agent') === 'phone'
    setMobile(isMobile)
  }, [searchParams])

  if (!mounted) {
    return <div className="min-h-screen bg-black" />
  }

  return (
    <MainNoAuth>
      <CompareCards predefinedCards={predefinedCards} mobile={mobile}/>
    </MainNoAuth>
  )
}

const Page = () => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black">Loading...</div>}>
      <ComparePageContent />
    </Suspense>
  )
}

export default Page
