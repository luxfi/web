import { 
  type Block, 
  type EnhHeadingBlock, 
  type ScreenfulBlock, 
} from '@hanzo/ui/blocks'


export default {
  blockType: 'screenful',
  //specifiers: 'vert-center mobile-vert-center',
  columnSpecifiers: ['vert-center center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      specifiers: 'center respect-case byline-center',
      heading: {
        text: 'Powering the Future of Bitcoin Mining',
        level: 2,
      },
      byline: {
        text: "At LUX Energy, we're revolutionizing the Bitcoin mining industry by harnessing the power of sustainable energy sources and cutting-edge technology.",
        level: 4
      }
    } satisfies EnhHeadingBlock as Block,
  ]] 
} satisfies ScreenfulBlock as Block
