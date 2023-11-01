import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

/*
const drukWide = localFont({
  src:[
    {
      path: './fonts/DrukWide-Medium-Trial.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/DrukWide-Bold-Trial.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/DrukWide-Heavy-Trial.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--druk-wide' 
})
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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export {
  inter,
//  drukWide,
  drukTextWide
}

