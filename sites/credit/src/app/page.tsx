import React  from 'react'

import { TailwindIndicator } from '@hanzo/ui/primitives'
import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'

import { tiles}  from '@/content'
import '@/blocks/registerComponents'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}


const Page = ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<>
    
    {tiles.map((banner, index) => (
      <Screenful 
        block={banner} 
        initialInView={index === 0} 
        agent={agent}
        snapTile
        key={`section-${index}`} 
      />
    ))}
    <TailwindIndicator />
  </>)
}

export default Page
