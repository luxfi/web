
const IMGS = {
  amex: 'assets/img/payment-methods/amex.svg',
  applePay: 'assets/img/payment-methods/apple-pay.svg',
  discover: 'assets/img/payment-methods/discover.svg',
  mastercard: 'assets/img/payment-methods/mastercard.svg',
  visa: 'assets/img/payment-methods/visa.svg',
  paypal: 'assets/img/payment-methods/paypal.svg',
}

const Cards = () => {
  return (
    <div className='flex gap-2'>
      {Object.values(IMGS).map(src => <img src={src} key={src} />)}
    </div>
  )
}

export default Cards
