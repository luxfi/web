'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Import block registrations (client-side only)
import '@/blocks/registerComponents'

// Dynamically import the original component without ssr: false
const OriginalScreenful = dynamic(
  () => import('@hanzo/ui/blocks').then(mod => mod.ScreenfulBlockComponent),
  { 
    loading: () => <div className="min-h-screen w-full"></div>
  }
)

export const DynamicScreenful: React.FC<any> = (props) => {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  if (!isClient) {
    return <div className="min-h-screen w-full"></div>
  }
  
  return <OriginalScreenful {...props} />
}

export default DynamicScreenful