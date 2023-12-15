import media from './video'
import buyLink from './buy-link'

export default {
  blockType: 'banner',
  title: 'LUX VALIDATOR',
  byline: 'Run the chain.',
  media,
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Learn More",
        href: "/validator",
        variant: 'outline'
      },
      buyLink,
    ]
  }
}
