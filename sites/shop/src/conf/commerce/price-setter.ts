import prices from '../prices'
import type { Category } from '@hanzo/commerce/types'

export const TS = '-'  // token separator
export const DEC = '_' // decimal substitute

const G_PER_OZ = 28.3495

const tree: any = {}
for (let key in prices) {
  const values = prices[key as keyof typeof prices]
  tree[key] = {
    oz: values.market1oz * (1 - values.discount),
    g: values.market1oz * (1 - values.discount) / G_PER_OZ  
  }
}

// LXB-AU-B-1-OZ, LXB-AU-B-2_5-g
const priceFromSKU = (
  sku: string
) => {
  const tokens = sku.split(TS)
  const type_ = tokens[1].toLowerCase()
  const amountTok = tokens[tokens.length - 2]
  let amount = amountTok.includes(DEC) ? parseFloat(amountTok.split(DEC).join('.')) : parseInt(amountTok)
  let unit = tokens[tokens.length - 1].toLowerCase()
  if (unit === 'kg') {
    amount *= 1000
    unit = 'g'
  }
  else if (unit === 'lb') {
    amount *= 16
    unit = 'oz'
  }

  return tree[type_][unit] * amount
}

export const visitCategory = (c: Category): Category => {
  for (let prod of c.products) {
    prod.price = priceFromSKU(prod.sku)
  }
  return c
}