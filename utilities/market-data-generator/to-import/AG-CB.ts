const globalAGPoz = 22.65
const globalAUPoz = 2048.00

const gPoz = 28.3495

const AUoz = (amount: number) => (
  globalAUPoz * amount * 0.99
)

const AUg = (amount: number) => (
  AUoz(amount) / gPoz
)

const AGoz = (amount: number) => (
  globalAGPoz * amount * 0.9
)

const AGg = (amount: number) => (
  AGoz(amount) / gPoz
)

export default [
  { 
    tok: '500-G',
    price: AGg(500)
  },
  { 
    tok: '1-KG',
    price: AGg(1000)
  },
  { 
    tok: '1000-OZ',
    price: AGoz(1000)
  },
]