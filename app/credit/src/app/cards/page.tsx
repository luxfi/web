// Block registration moved to DynamicScreenful (client-side)

import DesktopAllCards from './_page/desktop'
import MobileAllCards from './_page/mobile'

export const dynamic = 'force-dynamic'

const Page = () => {
  return (<>
    <DesktopAllCards clx='hidden md:flex pt-[80px]'/>
    <MobileAllCards clx='md:hidden pt-[44px]'/>
  </>)
}

export default Page
