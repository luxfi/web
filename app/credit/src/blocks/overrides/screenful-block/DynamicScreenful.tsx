'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the original component to ensure it's loaded on the client side
const OriginalScreenful = dynamic(
  () => import('@hanzo/ui/blocks').then(mod => mod.ScreenfulBlockComponent),
  { 
    ssr: false, 
    loading: () => <div className="min-h-screen w-full"></div>
  }
)

export const DynamicScreenful: React.FC<any> = (props) => {
  return <OriginalScreenful {...props} />
}

export default DynamicScreenful