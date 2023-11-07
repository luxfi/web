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
