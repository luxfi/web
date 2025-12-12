'use client'
import React from 'react'
import { Header as LuxHeader } from '@luxfi/ui'
import type { SiteDef } from '@/site-def'

const HeaderNoAuth: React.FC<{
  siteDef: SiteDef
  className?: string
}> = ({ siteDef, className = '' }) => {
  return (
    <LuxHeader 
      siteDef={siteDef}
      className={className}
      logoVariant='text-only'
    />
  )
}

export default HeaderNoAuth