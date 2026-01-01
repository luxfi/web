import CardPageClient from './client-page'

export async function generateStaticParams() {
  return [
    { slug: 'black' },
    { slug: 'elite' },
    { slug: 'founder' },
    { slug: 'sovereign' }
  ]
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params

  return (
    <CardPageClient slug={resolvedParams.slug} />
  )
}
