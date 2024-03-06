'use client'

import React  from 'react'

import { Header } from '@hanzo/ui/common'
import { TailwindIndicator } from '@hanzo/ui/primitives'
import { ScreenfulBlockComponent as Screenful, registerBlockType } from '@hanzo/ui/blocks'

import ElementTable from '@/blocks/components/element-table'
import siteDef from '@/siteDef'
import { tiles}  from '@/content'
import CardsCarouselBlockComponent from '@/blocks/components/cards-carousel'
import MilestoneBlockComponent from '@/blocks/components/milestone'
import CarouselBlockComponent from '@/blocks/components/carousel'
import ReviewBlockComponent from '@/blocks/components/review'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

registerBlockType('element-table', ElementTable)
registerBlockType('review', ReviewBlockComponent)
registerBlockType('cards-carousel', CardsCarouselBlockComponent)
registerBlockType('milestone', MilestoneBlockComponent)
registerBlockType('carousel', CarouselBlockComponent)

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
    <TailwindIndicator />
  </>)
}

export default Page
