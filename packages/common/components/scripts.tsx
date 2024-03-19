'use client'

import { usePathname } from 'next/navigation'
import { FacebookPixel } from '../next/analytics/pixel-analytics'
import { GoogleAnalytics } from '@next/third-parties/google'
import { useEffect } from 'react'

const Scripts = () => {
  const pathname = usePathname()

  useEffect(() => {
    document.body.classList.remove('loading-screen')
  }, [pathname])

  return (
    <>
      <FacebookPixel />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''} />
    </>
  )
}

export {
  Scripts as default
}