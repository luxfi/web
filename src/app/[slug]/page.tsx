import React  from 'react'

import Footer from '@/components/footer'
import ProductDetailBlockComponent from '@/components/block/product-detail-block'
import { products } from '@/content'
import type ProductDetailBlock from '@/content/types/product-detail-block'

type Props = {
  params: {
    slug: 'silver' | 'gold' | 'coin' | 'credit' | 'validator'
  }
}

export async function generateStaticParams() {

  const products = [
    'silver',
    'gold'
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
    <div className='flex flex-col justify-center items-center pb-6 pt-4'>
      <ProductDetailBlockComponent product={product}/>
    </div>
    <Footer />
  </>)
}

export default ProductPage
