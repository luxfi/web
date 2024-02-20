import video from './video'

export default{
  blockType: 'banner',
  title: 'LUX CREDIT',
  byline: 'Never sell your crypto again.',
  video: {...video, sizing: { vh: 50}},
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Learn More",
        href: "/credit",
        variant: 'outline'
      },
      {
        title: "Buy Now",
        href: "https://mint.lux.network/credit/black",
        external: true,
        newTab: false,
        variant: 'primary'
      },
    ]
  }
}
