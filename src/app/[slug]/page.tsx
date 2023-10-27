import React  from 'react'

import Footer from '@/components/footer'
import { products } from '@/content'
import type ProductDetailBlock from '@/content/types/product-detail-block'

type Props = {
  params: {
    slug: 'silver' | 'gold' | 'coin' | 'credit' | 'validator'
  }
}

export async function generateStaticParams() {

  const products = [
    "silver"
  ]
 
  return products.map((p) => ({
    slug: p,
  }))
}

export async function generateMetadata({ params}: Props) {
  return { title: params.slug }
}

const ProductPage = ({ params }: Props) => {

  const prod = products[params.slug] as ProductDetailBlock
  if (!prod) {
    return null
  }

  return (<>
    <div className=' flex flex-col justify-center items-center pb-6 pt-4'>
      <h1>{prod.title}</h1>
    </div>
    <Footer />
  </>)
}

export default ProductPage
