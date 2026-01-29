import React  from 'react'
import { notFound } from 'next/navigation'

import { Footer, Header, Main } from '@luxfi/ui'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'
import ProductDetailBlockComponent from '@/blocks/components/product-detail-block'
import { products } from '@/content'

import siteDef from '@/site-def'

type Props = {
  params: Promise<{ slug: 'coin' | 'validator' }>
}

export async function generateStaticParams() {

  const products = [
    'coin',
    'validator',
  ]

  return products.map((p) => ({
    slug: p,
  }))
}

export async function generateMetadata({ params}: Props) {
  const { slug } = await params
  const title = slug
  const capitalized = title.charAt(0).toUpperCase() + title.slice(1)
  return { title: capitalized }
}

const ProductPage = async ({ params }: Props) => {

  const { slug } = await params
  const product = products[slug] as ProductDetailBlock

  if (!product) {
    notFound()
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

export default ProductPage
