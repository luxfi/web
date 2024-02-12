import type { 
  Block,
  CTABlock, 
  HeadingBlock, 
} from '@luxdefi/ui/blocks'

export default [
  { blockType: 'space', level: 1},
  {
    blockType: 'heading',
    heading: 'Lorem ipsum dolor sit amet',
    level: 1,
    byline: 'Ut enim ad minim veniam, quis nostrud.',
    bylineLevel: 6,
    spaceBetween: 6,
    spaceAfter: 4,
  } satisfies HeadingBlock,
  {
    blockType: 'cta',
    specifiers: 'left mobile-2-columns',
    elements: [
      {
        title: "Ullamco Laboris",
        href: "/",
        variant: 'outline',
      },
      {
        title: "Commodo",
        href: "https://lux.town",
        newTab: false,
        variant: 'primary',
      },
    ]
  } satisfies CTABlock,
  { blockType: 'space', level: 0},
  {
    blockType: 'element',
    element: <p className='text-xxs italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  },
  { blockType: 'space', level: 1},
] 
