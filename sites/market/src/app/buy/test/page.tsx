'use client'
import React, { useEffect, useState, type PropsWithChildren, useRef, useMemo } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react-lite'

import {
  useQueryState,
  parseAsArrayOf,
  parseAsString,
} from 'next-usequerystate'

import { cn } from '@hanzo/ui/util'
import { formatPrice } from '@hanzo/cart/util'

import { Cart, FacetTogglesWidget, CategoryAndItemWidget} from '@hanzo/cart/components'
import { useCommerce } from '@hanzo/cart/service'

import siteDef from '@/siteDef'
import CartDrawer from '@/components/cart-drawer'
import type { Category, FacetsValue, LineItem } from '@hanzo/cart/types'
import Link from 'next/link'
import { ApplyTypography, ListBox } from '@hanzo/ui/primitives'

const L2_FACET_VALUES = siteDef.ext.commerce.facets[2]

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const TestPage: React.FC<Props> = observer(({
  searchParams
}) => {

  const comm = useCommerce()
  return (
    <div /* id='TEST_OUTERMOST' */ className='grid grid-cols-3 gap-6 w-full' >
      <div /* id='TEST_COL_1' */ className='flex flex-col justify-start gap-4 items-start pt-3 '>
        <ApplyTypography>
        {comm.specifiedCategories.length > 0 ? (<>
          <h2>{comm.specifiedCategories[0].title}</h2>
          {comm.currentItem && (
            <h4>{comm.currentItem.title}</h4>
          )}
        </>): (
          <h6>no category</h6>
        )}
        </ApplyTypography>
      </div>
      <div /* id='id='TEST_COL_2' */ className='flex flex-col justify-start gap-4 items-start pt-3'>
        <CategoryAndItemWidget 
          categoryLevel={2}
          parentLevelToken='AG'
          categoryLevelValues={L2_FACET_VALUES}
          className=''
        />
      </div> 
      <div /* id='id='TEST_COL_3' */ className='flex flex-col justify-start gap-4 items-start pt-3'>
        <Cart >
          <h4 className='text-center font-heading text-lg'>Lux Market Cart</h4>
        </Cart>
      </div> 
    </div>
  )
}) 

export default TestPage
