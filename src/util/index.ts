import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => (
  twMerge(clsx(inputs))  
) 

export const defaultVideoProps = {
  autoPlay: true, 
  loop: true, 
  muted: true, 
  playsInline: true
}

