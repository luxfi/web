import media from './video'

export default {
  blockType: 'banner',
  title: 'LUX GOLD',
  byline: <>Responsibly manufactured, <br className='sm:hidden'/>ethically sourced.</>,
  media,
  cta: {
    blockType: 'cta',
    elements: [
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