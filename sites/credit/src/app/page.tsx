import React  from 'react'

import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'
import { DrawerMargin, Header } from '@luxfi/core'

import { desktopTiles, mobileTiles}  from '@/content'
import FooterSlide from '@/components/footer-slide'
import '@/blocks/registerComponents'
import siteDef from '@/conf/site-def'

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
        bottom={<DrawerMargin clx='grow-0 shrink-0'/>}
      />
    ))}
    <FooterSlide />
  </>)
}

export default Page
