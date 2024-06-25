import React  from 'react'
import { notFound } from 'next/navigation'

import { Footer, Header, Main } from '@luxfi/core'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'
import ProductDetailBlockComponent from '@/blocks/components/product-detail-block'

import { products } from '@/content'
import siteDef from '@/site-def'

type Props = {
  params: { slug: 'silver' | 'gold' | 'coin' | 'credit' | 'validator' | 'key' | 'uranium' }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {

  const products = [
    'silver',
    'gold',
    'coin',
    'credit',
    'validator',
    'key',
    'uranium',
  ]

  return products.map((p) => ({
    slug: p,
  }))
}

export async function generateMetadata({ params}: Props) {
  const title = params.slug
  const capitalized = title.charAt(0).toUpperCase() + title.slice(1)
  return { title: capitalized }
}

const ProductPage = ({ params, searchParams }: Props) => {

  const product = products[params.slug] as ProductDetailBlock

  if (!product) {
    notFound()
  }

  // see src/middleware.ts
  const agent = searchParams?.agent

  return (<>
    <Header siteDef={siteDef}/>
    <Main className='md:flex-row md:gap-4'>
      <ProductDetailBlockComponent block={product} agent={agent as string}/>
    </Main>
    <div className='border-t'></div>
    <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />
  </>)
}

export default ProductPage
