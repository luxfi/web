// From Next Image Dim
type Dimensions = {
  w: number | `${number}`
  h: number | `${number}`
}

type TShirtDimensions = {               
  sm?: Dimensions, 
  md: Dimensions, 
  lg?: Dimensions 
}

export {
  type Dimensions,
  type TShirtDimensions
}

  