import React  from 'react'

import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'
import { Header } from '@luxdefi/common'

import { desktopTiles, mobileTiles}  from '@/content'
import '@/blocks/registerComponents'
import FooterSlide from '@/components/footer-slide'
import siteDef from '../conf/site-def'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {
    // see src/middleware.ts
  const agent = searchParams?.agent as string

  const tiles = agent === 'desktop' ? desktopTiles : mobileTiles

  return (<>
    <Header siteDef={siteDef}/>
    {tiles.map((banner, index) => (
      <Screenful 
        block={banner} 
        initialInView={index === 0} 
        agent={agent}
        snapTile
        key={`section-${index}`} 
      />
    ))}
    <FooterSlide />
  </>)
}

export default Page
