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
  'LXM-FC': {
    singleFamily: {
      type: 'carousel',
      options: {
        showQuantity: true 
      }
    }
  },  
  'LXM-CR': {
    multiFamily: {
      familySelector: 'carousel',
      showParentTitle: false, 
      slide: {
        type: 'buttons',
        options: {
          title: 'long',
          showPrice: false,
          imageButtons: true,
          horizButtons: true,
        }
      }
    }
  },
  'LXM-AG': {
    multiFamily: {
      familySelector: 'carousel',
      showParentTitle: true, 
      slide: {
        type: 'buttons',
        options: {
          title: 'long',
        }
      }
    }
  },
  
} satisfies Record<string, SelectionUISpecifier>
