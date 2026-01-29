'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Footer, Header, Main } from '@luxfi/ui'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'
import ProductDetailBlockComponent from '@/blocks/components/product-detail-block'
import { products } from '@/content'
import siteDef from '@/site-def'

const ProductPageContent: React.FC<{ slug: string }> = ({ slug }) => {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const product = products[slug as keyof typeof products] as ProductDetailBlock

  useEffect(() => {
    setMounted(true)
    if (!products[slug as keyof typeof products]) {
      router.replace('/404')
    }
  }, [slug, router])

  if (!mounted || !product) {
    return null
  }

  return (<>
    <Header siteDef={siteDef}/>
    <Main className='md:flex-row md:gap-4 '>
      <ProductDetailBlockComponent block={product} agent={undefined as unknown as string}/>
    </Main>
    <div className='border-t'></div>
    <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />
  </>)
}

export default ProductPageContent
