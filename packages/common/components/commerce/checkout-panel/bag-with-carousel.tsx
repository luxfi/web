'useClient'
import { useCommerce, ItemCarousel } from '@hanzo/commerce'
import React from 'react'

import BagPanel from '../bag-panel'

const BagWithCarousel: React.FC<{
  className?: string
}> = ({
  className=''
}) => {
  const cmmc = useCommerce()
  return (
   <BagPanel className={className} >
     <ItemCarousel items={cmmc.cartItems} />     
   </BagPanel>
  )
}

export default BagWithCarousel
