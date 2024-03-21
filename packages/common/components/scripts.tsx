'use client'

import { useEffect } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { FacebookPixel } from '../next/analytics'

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