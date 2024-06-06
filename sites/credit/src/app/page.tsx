import React  from 'react'

import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'
import { DrawerMargin, Footer, Header } from '@luxfi/core'

import { desktopTiles, mobileTiles}  from '@/content'
import FooterSlide from '@/components/footer-slide'
import siteDef from '@/site-def'
import '@/blocks/registerComponents'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {
    // see src/middleware.ts
  const agent = searchParams?.agent as string
  const tiles = agent === 'desktop' ? desktopTiles : mobileTiles
  const swipeOuter = 'snap-start snap-always h-[100vh] '
  const swipeInner = 'pt-[68px] md:pt-[104px] pb-[24px] '
  const swipeInnerTouch = swipeInner + 'h-[100svh] '

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
    <FooterSlide agent={agent} />
  </>)
}

export default Page
