import type { SelectionUISpecifier } from '@hanzo/commerce/types'

export const selectionUISpecifiers = {

  'LXM-CN': {
    singleFamily: {
      type: 'buttons',
      options: {
        imageButtons: true 
      }
    }
  },  
  'LXM-CR': {
    multiFamily: {
      family: 'carousel',
      inSlide: {
        type: 'buttons',
        options: {
          imageButtons: true,
          horizButtons: true 
        }
      }
    }
  },
  
} satisfies Record<string, SelectionUISpecifier>
