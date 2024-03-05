import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import type NextFontDesc from './next-font-desc'
import type TwFontDesc from '@hanzo/ui/tailwind/tw-font-desc' // TODO

import twFonts from '@hanzo/ui/tailwind/lux-tw-fonts' // TODO

/*
  Creating NextFontDesc's and TwFontDesc's has to be seperated because they are needed 
  at different times during the next compile / build.  Otherwise a nasty 
  race condition happens! 

  Also, requires that "Font loaders must be called and assigned to a const in the module scope"

*/

const drukTextWide = localFont({
  src: [
    {
      path: './fonts/DrukTextWide-Medium-Trial.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/DrukTextWide-Bold-Trial.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/DrukTextWide-Heavy-Trial.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-druk-text-wide' ,
})

const drukWide = localFont({
  src: [
    {
      path: './fonts/DrukWide-Medium-Trial.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/DrukWide-Bold-Trial.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/DrukWide-Heavy-Trial.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-druk-wide' ,
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
  
export default [
  {
    font: inter,
    twName: 'sans'
  },
  {
    font: drukTextWide,
    twName: 'nav'
  },
  {
    font: drukWide,
    twName: 'heading'
  } 
].map (
  (el) => {
    const twFont: TwFontDesc | undefined = twFonts.find((twf: TwFontDesc) => (el.twName === twf.twName))
    if (!twFont) {
      throw new Error('lux-next-fonts: Next font is not paired to a TW font!')
    }

    return ({
      ...twFont,
      nextFont: el.font,
    })
  }
) as NextFontDesc[]


