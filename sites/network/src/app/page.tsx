import React  from 'react'

import { ChatWidget, Footer, Header } from '@hanzo/ui/common'

import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

import siteDef from '../siteDef'

import tiles from '@/content'


  // Scroll Snap using this is the approach: 
  // https://stackoverflow.com/a/76066443/11645689
  // see also styles on 'html' in @hanzo/ui/style/global.css

  const Page = ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<>
    <Header siteDef={siteDef} className='fixed left-0 right-0 z-50'/>
    {tiles.map((banner, index) => (
      <Screenful 
        block={banner} 
        initialInView={index === 0} 
        agent={agent}
        snapTile
        key={`section-${index}`} 
      />
    ))}
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
    <ChatWidget
      title='LUX'
      subtitle='AI'
      chatbotUrl='https://lux.chat/iframe'
      suggestedQuestions={[
        { heading: 'Lux network features', message: 'What are the key features of Lux network?', icon: 'ShieldFlashLineIcon' },
      ]}
    />
  </>)
}

export default Page
