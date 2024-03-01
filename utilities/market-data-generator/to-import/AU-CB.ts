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
    price: AUg(500)
  },
  { 
    tok: '1-KG',
    price: AUg(1000)
  },
  { 
    tok: '400-OZ',
    price: AUoz(400)
  },
]