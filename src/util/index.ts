import { compiler as mdCompiler } from 'markdown-to-jsx'

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => (
  twMerge(clsx(inputs))  
) 

export const DEF_VIDEO_PROPS = {
  autoPlay: true, 
  loop: true, 
  muted: true, 
  playsInline: true
}

export const markdown = (s: string, options?: any): JSX.Element => (mdCompiler(s, options))

export const round = (num: number): string  => (
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
)

export const pxToRem = (px: number, base: number): string => (`${round(px / base)}rem`)

export const pxToEm = (px: number, base: number): string  => (`${round(px / base)}em`)

export const hexToRgb = (hex: string): string => {
  hex = hex.replace('#', '')
  hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  return `${r} ${g} ${b}`
}
