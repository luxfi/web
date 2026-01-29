import dynamic from 'next/dynamic'

const ProductPageContent = dynamic(() => import('@/components/ProductPageContent'), { ssr: false })

export async function generateStaticParams() {
  return [
    { slug: 'coin' },
    { slug: 'validator' },
  ]
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const capitalized = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
  return { title: capitalized }
}

const ProductPage = ({ params }: { params: { slug: string }}) => (
  <ProductPageContent slug={params.slug} />
)

export default ProductPage
