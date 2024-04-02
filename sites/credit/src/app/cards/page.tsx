import '@/blocks/registerComponents'
import DesktopAllCards from '@/components/all-cards/desktop'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<>
    <DesktopAllCards clx='hidden md:flex'/>
    {/* <MobileAllCards className='hidden md:flex'/> */}
  </>)
}

export default Page
