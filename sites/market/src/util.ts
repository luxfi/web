import siteDef from '@/siteDef'

const PRICES = siteDef.ext.prices

const formatPrice = (price: number, noDollarSign = false): string => {
  const v = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return (noDollarSign) ? v.slice(1) : v
}

const bullionPrice1oz = (type_: keyof typeof PRICES): number => (
  PRICES[type_].market1oz * (1 - PRICES[type_].discount)  
)

export {
  formatPrice,
  bullionPrice1oz
}