import React from 'react'
import Image from 'next/image'

  // these both have ok heights, so just render them
import SVG_cdax from './svg/logo-cdax.svg'
import SVG_gda_capital from './svg/logo-gda-capital.svg'

const MF = 0.6 // mobile fraction

const TrustLogosGrid: React.FC = () => (
  <div 
    className={
      'not-typography flex flex-row flex-wrap md:flex-nowrap justify-center items-center ' + 
      'mt-6 gap-4 text-foreground w-full lg:mx-auto max-w-screen-lg'
    }
  >
    <Image src='/assets/img/logos/logo_vera.png' width={138} height={37} alt='Vera logo' className='hidden md:block'/>
    <Image src='/assets/img/logos/logo_vera.png' width={138 * MF} height={37 * MF} alt='Vera logo' className='md:hidden'/>
    <SVG_cdax width={102} height={33} className='hidden md:block'/>
    <SVG_cdax width={102 * MF} height={33 * MF} className='md:hidden'/>
    <Image src='/assets/img/logos/logo_mc_consulting.png' alt='MC2 logo' width={178} height={28} className='hidden md:block'/>
    <Image src='/assets/img/logos/logo_mc_consulting.png' alt='MC2 logo' width={178 * MF} height={28 * MF} className='md:hidden'/>
    <SVG_gda_capital width={142} height={52} className='hidden md:block'/>
    <SVG_gda_capital width={142 * MF} height={52 * MF} className='md:hidden'/>
    <Image src='/assets/img/logos/logo_viscount.png' alt='Viscount logo' width={150} height={43} className='hidden md:block'/>
    <Image src='/assets/img/logos/logo_viscount.png' alt='Viscount logo' width={150 * MF} height={43 * MF} className='md:hidden'/>
  </div>
)


export default TrustLogosGrid
