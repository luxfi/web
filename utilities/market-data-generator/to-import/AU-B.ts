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
    price: AUoz(1)  
  },
  /*
  {
    tok: '5-OZ',
    price: 9690  
  },
  {
    tok: '10-OZ',
    price: 19380  
  },
  {
    tok: '100-OZ',
    price: 193800  
  },
*/
  {
    tok: '1-G',
    price: AUg(1)
  },
  /*
  {
    tok: '2_5-G',
    price: 155.53  
  },
  
  {
    tok: '5-G',
    price: 311.07  
  },
*/
  {
    tok: '10-G',
    price: AUg(10)

//    price: 622.14  
  },
  /*
  {
    tok: '20-G',
    price: 1244.28  
  },
  {
    tok: '50-G',
    price: 3110.70  
  },
*/
  {
    tok: '100-G',
    price: AUg(100)
  },

  /*
  {
    tok: '250-G',
    price: 15553.48  
  },
  {
    tok: '500-G',
    price: 31106.96  
  },
  {
    tok: '1-KG',
    price: 62213.92  
  },
  */

  {
    tok: '400-OZ',
    price: AUoz(400)

  }

]  