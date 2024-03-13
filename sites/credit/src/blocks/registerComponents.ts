import { registerBlockType } from '@hanzo/ui/blocks'

import CardsCarouselBlockComponent from '@/blocks/components/cards-carousel'
import ElementTable from '@/blocks/components/element-table'
import ReviewsCarouselBlockComponent from './components/reviews-carousel'
import RoadmapBlockComponent from './components/roadmap'

registerBlockType('element-table', ElementTable)
registerBlockType('cards-carousel', CardsCarouselBlockComponent)
registerBlockType('reviews-carousel', ReviewsCarouselBlockComponent)
registerBlockType('roadmap', RoadmapBlockComponent)
