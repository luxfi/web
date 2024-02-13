import React  from 'react'

import { Footer, Header } from '@luxdefi/ui/common'
import { TailwindIndicator } from '@luxdefi/ui/primitives'
import { ScreenfulBlockComponent as Screenful, registerBlockType } from '@luxdefi/ui/blocks'

import ElementTable from '@/blocks/components/element-table'
import siteDef from '@/siteDef'
import tiles from '@/content'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

registerBlockType('element-table', ElementTable)

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
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-[200px] lg:mx-auto ' />
    <TailwindIndicator />
  </>)
}

export default Page
