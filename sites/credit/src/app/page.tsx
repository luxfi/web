import React  from 'react'

import { Header } from '@hanzo/ui/common'
import { TailwindIndicator } from '@hanzo/ui/primitives'
import { ScreenfulBlockComponent as Screenful, registerBlockType } from '@hanzo/ui/blocks'

import ElementTable from '@/blocks/components/element-table'
import siteDef from '@/siteDef'
import { tiles}  from '@/content'
import ReviewsBlockComponent from '@/blocks/components/reviews'
import CardsCarouselBlockComponent from '@/blocks/components/cards-carousel'
import MilestoneBlockComponent from '@/blocks/components/milestone'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

registerBlockType('element-table', ElementTable)
registerBlockType('review', ReviewsBlockComponent)
registerBlockType('cards-carousel', CardsCarouselBlockComponent)
registerBlockType('milestone', MilestoneBlockComponent)

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
