import '@/blocks/registerComponents'
import DesktopAllCards from '@/components/all-cards/desktop'
import MobileAllCards from '@/components/all-cards/mobile'

const Page = () => {
  return (<>
    <DesktopAllCards clx='hidden md:flex'/>
    <MobileAllCards clx='md:hidden'/>
  </>)
}

export default Page
