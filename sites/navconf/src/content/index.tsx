import type {
  Block,
  CTABlock,
  HeadingBlock,
} from '@luxdefi/ui/blocks'

export default [
  { blockType: 'space', level: 1},
  {
    blockType: 'heading',
    heading: 'Welcome to Lux Town',
    level: 1,
    spaceBetween: 4,
    spaceAfter: 4,
  } satisfies HeadingBlock,
  {
    blockType: 'cta',
    specifiers: 'left mobile-2-columns',
    elements: [
      {
        title: "Learn more",
        href: "https://lux.chat/",
        variant: 'outline',
      },
      {
        title: "Log in",
        href: "/login",
        newTab: false,
        variant: 'primary',
      },
    ]
  } satisfies CTABlock,
  { blockType: 'space', level: 0},
  {
    blockType: 'element',
    element: <p className='text-xs italic'>No invite code? <a href="mailto:ai@lux.partners?subject=%E2%96%BC%20Lux%20Invite">Request an invite</a>.</p>
  },
  { blockType: 'space', level: 1},
]
