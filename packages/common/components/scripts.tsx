'use client'

import { FacebookPixel } from '../next/analytics/pixel-analytics'
import { GoogleAnalytics } from '@next/third-parties/google'
import { useEffect } from 'react'

const Scripts = () => {

  useEffect(() => {
    document.body.classList.remove('loading-screen')
  }, [])

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