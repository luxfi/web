import React  from 'react'

import type ProductDetailBlock from '@/content/types/product-detail-block'

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
    return null
  }

  return (<>
    <Main className='md:flex-row md:gap-4'>
      <ProductDetailBlockComponent product={product}/>
    </Main>
    <Footer />
  </>)
}

export default ProductPage
