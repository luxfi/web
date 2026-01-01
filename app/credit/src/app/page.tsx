'use client'

import React from 'react'

import { ScreenfulBlockComponent as Screenful } from '@/blocks/overrides/screenful-block'

import { desktopTiles, mobileTiles } from '@/content'
import FooterSlide from '@/components/footer-slide'
import HeaderNoAuth from '@/components/header-no-auth'
import siteDef from '@/site-def'
// Block registration moved to DynamicScreenful (client-side)

const Page = () => {
  // For static export, detect agent on client side
  const [agent, setAgent] = React.useState<string>('')

  React.useEffect(() => {
    // Check if running on desktop based on window width
    const isMobile = window.innerWidth < 768
    setAgent(isMobile ? 'mobile' : 'desktop')
  }, [])

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
    <FooterSlide agent={agent} />
  </>)
}

export default Page
