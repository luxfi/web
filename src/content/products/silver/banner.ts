import media from './video'

export default {
  blockType: 'asset-banner',
  title: 'LUX SILVER',
  byline: 'The Silver Rush is Here.',
  media,
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Learn More",
        href: "/silver",
        variant: 'outline'
      },
      {
        title: "Buy Now",
        href: "/",
        variant: 'primary'
      },
    ]
  } 
}