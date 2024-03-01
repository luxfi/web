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
    tok: '1-OZ',
    price: AGoz(1) 
  },
  { 
    tok: '1-G',
    price: AGg(1)
  },
  { 
    tok: '10-G',
    price: AGg(10)
  },
  { 
    tok: '100-G',
    price: AGg(100)
  },
  { 
    tok: '1-KG',
    price: AGg(1000)
  },

]