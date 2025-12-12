'use client'

import React  from 'react'

import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'

import { desktopTiles, mobileTiles}  from '@/content'
import FooterSlide from '@/components/footer-slide'
import CompatibleSection from '@/components/compatible-section'
import HeaderNoAuth from '@/components/header-no-auth'
import siteDef from '@/site-def'
import '@/blocks/registerComponents'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {
    // see src/middleware.ts
  const agent = React.use(searchParams)?.agent as string
  const tiles = agent === 'desktop' ? desktopTiles : mobileTiles

  return (<>
    <HeaderNoAuth siteDef={siteDef}/>
    {tiles.map((banner, index) => (
      <Screenful
        block={banner}
        initialInView={index === 0}
        agent={agent}
        snapTile
        key={`section-${index}`}
        contentClx='max-w-screen-2xl'
      />
    ))}
    <CompatibleSection />
    <FooterSlide agent={agent} />
  </>)
}

export default Page
