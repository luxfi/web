'use client'

import React from 'react'
import { ScreenfulBlockComponent as Screenful } from '@/blocks/client-blocks'

const ClientScreenful = ({ block, initialInView, agent, index }: any) => {
  return (
    <Screenful 
      block={block} 
      initialInView={initialInView} 
      agent={agent}
      key={`section-${index}`} 
    />
  )
}

export default ClientScreenful