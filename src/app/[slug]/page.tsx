import React  from 'react'

import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

import type ProductDetailBlock from '@/types/block/product-detail-block'

import Footer from '@/components/footer'
import Main from '@/components/main'
import ProductDetailBlockComponent from '@/components/block/product-detail-block'
 
import { products } from '@/content'
const ScrollbarRestorer = dynamic(() => (import('../../components/main-scrollbar-restorer')))

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
    <ScrollbarRestorer />
  </>)
}

export default ProductPage
