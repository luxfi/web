import React  from 'react'
import { notFound } from 'next/navigation'

import { Footer, Main } from '@luxdefi/ui/common'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'
import ProductDetailBlockComponent from '@/blocks/components/product-detail-block'
import { products } from '@/content'

type Props = {
  params: { slug: 'silver' | 'gold' | 'coin' | 'credit' | 'validator' | 'pass' | 'uranium' }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {

  const products = [
    'silver',
    'gold',
    'coin',
    'credit',
    'validator',
    'pass',
    'uranium',
  ]
 
  return products.map((p) => ({
    slug: p,
  }))
}

export async function generateMetadata({ params}: Props) {
  return { title: params.slug }
}

const ProductPage = ({ params, searchParams }: Props) => {

  const product = products[params.slug] as ProductDetailBlock
  
  if (!product) {
    notFound()
  }

  // see src/middleware.ts
  const agent = searchParams?.agent

  return (<>
    <Main className='md:flex-row md:gap-4 '>
      <ProductDetailBlockComponent block={product} videoSize={agent === 'phone' ? 'md' : undefined}/>
    </Main>
    <div className='border-t'></div>
    <Footer className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default ProductPage
