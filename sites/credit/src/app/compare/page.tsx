//'use client'

import React  from 'react'

import { TailwindIndicator, Main, } from '@hanzo/ui/primitives'
import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'

import { ChatWidget } from '@hanzo/ui/common'

import '@/blocks/registerComponents'

import table from '@/content/compare-table'
import BackButton from '@/components/back-button'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<Main className='relative'>
    <BackButton
      variant='outline'
      size='lg'
      iconClx='w-6 h-6 lg:w-7 lg:h-7'
      className='z-50 w-8 h-8 lg:w-10 lg:h-10 absolute left-8 top-[0px] md:min-w-0 lg:min-w-0 px-1'
    />
    <Screenful 
      block={table} 
      agent={agent}
      className='min-h-0 h-auto'
      contentClx='min-h-0 '
    />
    <ChatWidget
      title='LUX'
      subtitle='AI'
      chatbotUrl='https://lux.chat/iframe'
    />
    <TailwindIndicator />
  </Main>)
}

export default Page
