import video from './video'
import buyLink from './buy-link'

export default {
  blockType: 'banner',
  title: 'LUX VALIDATOR',
  byline: 'Run the chain.',
  video: {...video, sizing: { vh: 50}},
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
