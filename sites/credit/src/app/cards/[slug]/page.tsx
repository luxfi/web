type Props = {
  params: { slug: 'black' | 'elite' | 'founder' | 'sovereign' }
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ params, searchParams }: Props) => {
  return (<>
    {params.slug} {searchParams?.sku}
  </>)
}

export default Page
