'use client'
import React, { useEffect } from 'react'

const ScrollbarRestorer: React.FC = () => {

  useEffect(() => {
    document.body.classList.remove('overflow-y-hidden')
    return () => {
      document.body.classList.add('overflow-y-hidden')
    }
  }, [])

  return <></>
}

export default ScrollbarRestorer
