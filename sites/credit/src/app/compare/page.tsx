//'use client'

import React  from 'react'

import { TailwindIndicator } from '@hanzo/ui/primitives'
import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'

import { ChatWidget } from '@hanzo/ui/common'

import '@/blocks/registerComponents'


import table from '@/content/compare-table'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<>
    <Screenful 
      block={table} 
      agent={agent}
      className='min-h-0 h-auto'
      contentClx='pt-3 min-h-0 '
    />
    <ChatWidget
      title='LUX'
      subtitle='AI'
      chatbotUrl='https://lux.chat/iframe'
    />
    <TailwindIndicator />
  </>)
}

export default Page
