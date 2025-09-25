import React  from 'react'

import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'
import { Header } from '@luxfi/ui'

import tiles  from '@/content'
import siteDef from '@/site-def'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {
    // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<>
    <Header siteDef={siteDef}/>
    {tiles.map((tile, index) => (
      <Screenful 
        block={tile} 
        initialInView={index === 0} 
        agent={agent}
        snapTile
        key={`section-${index}`} 
      />
    ))}
  </>)
}

export default Page
