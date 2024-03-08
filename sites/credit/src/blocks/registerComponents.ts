import { registerBlockType } from '@hanzo/ui/blocks'

import CardsCarouselBlockComponent from '@/blocks/components/cards-carousel'
import MilestoneBlockComponent from '@/blocks/components/milestone'
import CarouselBlockComponent from '@/blocks/components/carousel'
import ReviewBlockComponent from '@/blocks/components/review'
import ElementTable from '@/blocks/components/element-table'

registerBlockType('element-table', ElementTable)
registerBlockType('review', ReviewBlockComponent)
registerBlockType('cards-carousel', CardsCarouselBlockComponent)
registerBlockType('milestone', MilestoneBlockComponent)
registerBlockType('carousel', CarouselBlockComponent)
