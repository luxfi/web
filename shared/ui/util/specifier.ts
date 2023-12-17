import type { Dimensions, TShirtSize }  from '../types'
import type { TypographySize } from '../primitives/apply-typography'

export const getPrimaryStartingWith = (s: string, toFind: string) => {
  const tokenArray = s.split(' ')
  return tokenArray.find((tok) => (tok.startsWith(`${toFind}-`)))
}

export const getTShirtSize = (s: string): TShirtSize | undefined => {
  const subTokenArray = s.split('-')
  return subTokenArray[subTokenArray.length - 1] as TShirtSize
}

export const getTypographySize = (s: string): TypographySize | undefined => {
  const subTokenArray = s.split('-')
  return subTokenArray[subTokenArray.length - 1] as TypographySize
}

export const getDim = (s: string): Dimensions | undefined  => {
  const subTokenArray = s.split('-')
  const dimStr = subTokenArray[subTokenArray.length - 1] 
  if (dimStr) {
    const dimTokenArray = s.split('x')
    return dimTokenArray ? {
      w: Number(dimTokenArray[0]),
      h: Number(dimTokenArray[1])
    } : undefined
  }
  return undefined
}

export function getSpecifierData<T>(
  main: string,
  getPrimary: (s: string) => string | undefined,
  getData: (s: string) => T | undefined,
  def?: T
): T | undefined {
  const primary = getPrimary(main)
  if (primary) {
    return getData(primary) ?? def
  }
  return def ?? undefined
}
