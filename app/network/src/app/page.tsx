import dynamic from 'next/dynamic'

const PageContent = dynamic(() => import('@/components/PageContent'), { ssr: false })

const Page = () => <PageContent />

export default Page
