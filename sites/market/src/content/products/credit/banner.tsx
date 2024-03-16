import video from './video'

export default{
  blockType: 'banner',
  title: 'LUX CREDIT',
  byline: 'Never sell your crypto again.',
  video: {...video, sizing: { vh: 50}},
  cta: {
    blockType: 'cta',
    specifiers: 'mobile-2-columns',
    elements: [
      {
        title: "Learn More",
        href: "/credit",
        variant: 'outline'
      },
      {
        title: "Buy Now",
        href: "https://lux.credit/buy?sku=LXM-CR-B-ABT",
        external: true,
        newTab: false,
        variant: 'primary'
      },
    ]
  }
}
