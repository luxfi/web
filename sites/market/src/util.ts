export function formatPrice(price: number, noDollarSign = false): string {
  const v = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return (noDollarSign) ? v.slice(1) : v
}
