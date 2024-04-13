import type { SelectionUISpecifier } from '@hanzo/commerce/types'

export const selectionUISpecifiers = {

  'LXM-CN': {
    singleFamily: {
      type: 'buttons',
      options: {
        showFamilyTitle: true,
        showByline: false,
        buttonType: 'text',
        showPrice: false,
        horizButtons: true,
        sort: 'asc'
      }
    }
  },  
  'LXM-FC': {
    singleFamily: {
      type: 'carousel',
      options: {
        //showQuantity: true 
      }
    }
  },  
  'LXM-CR': {
    multiFamily: {
      type: 'all-variants-carousel',
      showParentTitle: false, 
      options: {
        showFamilyByline: true,
        title: 'long',
        showPrice: false,
        buttonType: 'image',
        horizButtons: true,
      }
    }
  },
  'LXM-AG': {
    multiFamily: {
      type: 'all-variants-carousel',
      showParentTitle: true, 
      options: {
        title: 'long',
      }
    }
  },
  
} satisfies Record<string, SelectionUISpecifier>
