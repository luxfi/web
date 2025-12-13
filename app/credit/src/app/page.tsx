import React  from 'react'

import { ScreenfulBlockComponent as Screenful } from '@/blocks/overrides/screenful-block'

import { desktopTiles, mobileTiles}  from '@/content'
import FooterSlide from '@/components/footer-slide'
import CompatibleSection from '@/components/compatible-section'
import HeaderNoAuth from '@/components/header-no-auth'
import siteDef from '@/site-def'
// Block registration moved to DynamicScreenful (client-side)

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

const Page = async ({ searchParams }: PageProps ) => {
  const resolvedSearchParams = await searchParams
    // see src/middleware.ts
  const agent = resolvedSearchParams?.agent as string
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
