import React  from 'react'

import { notFound } from 'next/navigation'

import type ProductDetailBlock from '@/types/blocks/product-detail-block'

import Footer from '@/components/footer'
import Main from '@/components/main'
import ProductDetailBlockComponent from '@/components/block/product-detail-block'

import { products } from '@/content'

type Props = {
  params: {
    slug: 'silver' | 'gold' | 'coin' | 'credit' | 'validator' | 'pass' | 'uranium'
  }
}

export async function generateStaticParams() {

  const products = [
    'silver',
    'gold',
    'coin',
    'uranium',
    'credit',
    'validator',
    'pass',
  ]
 
  return products.map((p) => ({
    slug: p,
  }))
}

export async function generateMetadata({ params}: Props) {
  return { title: params.slug }
}

const ProductPage = ({ params }: Props) => {

  const product = products[params.slug] as ProductDetailBlock
  if (!product) {
    notFound()
  }

  return (<>
    <Main className='md:flex-row md:gap-4 '>
      <ProductDetailBlockComponent product={product}/>
    </Main>
    <div className='border-t'></div>
    <Footer className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default ProductPage
