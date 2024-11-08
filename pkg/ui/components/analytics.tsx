'use client'

import { useEffect } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { FacebookPixel } from '../next/analytics'

const Analytics = () => {

  useEffect(() => {
    document.body.style.display = 'flex'
  }, [])

  return (
    <>
      <FacebookPixel />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''} />
    </>
  )
}

export {
  Analytics as default
}
