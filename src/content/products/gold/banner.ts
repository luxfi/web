import media from './video'

export default {
  blockType: 'asset-banner',
  title: 'LUX GOLD',
  byline: 'Responsibly manufactured, ethically sourced.',
  media,
  ctas: {
    blockType: 'cta',
    items: [
      {
        title: "Learn More",
        href: "/gold",
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