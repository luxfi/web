import { writeFileSync } from 'fs'
import { v4 as unique} from 'uuid'
import type { Product, Category } from '@hanzo/commerce/types'

import { type ItemImportData, type LevelImportData } from './types.ts'

import { 
  IMG, 
  ASSETS_PATH, 
  OUT_DIR, 
  OUT_FN,
  TS,
  DEC,
  ROOT
} from './config.ts'

const categories: Category[] = []

const amountStrFromItemToken = (t: string): string => {
  const tokens = t.split(TS)
    // Must lower-case it becuase multibar tokens have an 'X' in them
  const amount = (tokens[0].includes(DEC) ? tokens[0].split(DEC).join('.') : tokens[0]).toLowerCase()
  const unit = tokens[1].toLowerCase() // OZ -> oz
  return amount + unit
}

const visitNode = (
  levelData: LevelImportData, 
  titleTokens: string[] = [],
  skuTokens: string[] = [], 
): void => {

  const tToken = levelData.titleToken ?? levelData.label
    // otherwise extra comma if titleToken is '' at this level
  if (tToken?.length > 0) {
    titleTokens.push(tToken)   
  }

  skuTokens.push(levelData.tok)

  if (levelData.ch.length > 0 && 'price' in levelData.ch[0]) {

    const categoryTitle = titleTokens.join(', ')
    const categoryId = skuTokens.join(TS)

      // Since we are at the leaf level,
      // these are valid for the entire array.
    const bullionForm = titleTokens.pop()
    const previousTitle = titleTokens.join(', ')

        // from ItemImportData to hanzo/cart Product
    const hanzoProducts = (levelData.ch as ItemImportData[]).map(
      (prod) => ({
        id: unique(),

          // add myself to the string
        sku: [...skuTokens, prod.tok].join('-'), 
          // Desired result: "Lux Bullion, Gold, 1oz Minted Bar", ie,
          //  `<previous title tokens joined>, <amount> <form>`
        title: `${previousTitle}, ${amountStrFromItemToken(prod.tok)} ${bullionForm}`,
        titleAsOption: amountStrFromItemToken(prod.tok),
        ...(prod.shortTitle ? {shortTitle: prod.shortTitle} : {}),
        categoryId: categoryId,
        desc: prod.desc ? prod.desc : levelData.desc,
        price: 0,
          // @ts-ignore
        img: ASSETS_PATH + IMG[prod.img ?? levelData.img!]   
      } satisfies Product)
    )

      // from LevelImportData to hanzo Category
    categories.push({
      id: skuTokens.join(TS),
      title: categoryTitle,
      desc: levelData.desc,
      img: levelData.img,
      products: hanzoProducts
    } satisfies Category)
    
  }
  else if (levelData.ch.length > 0 && 'ch' in levelData.ch[0]) {

    const {img: parentImg, desc: parentDesc} = levelData
    const subLevels = levelData.ch as LevelImportData[]
    
    subLevels.forEach(({tok, label, img, desc, ch}) => {
      visitNode({
          tok,
          label,
          img: img ?? parentImg, 
          desc: desc ?? parentDesc,
          ch,
        } satisfies LevelImportData,
          // Each branch (ch levelData) must have it's own fresh copies to reduce
        [...titleTokens], 
        [...skuTokens]
      )
    })
  }
}

visitNode(ROOT as unknown as LevelImportData)
categories.forEach((cat) => {
      // @ts-ignore
    cat.img = ASSETS_PATH + IMG[cat.img!] 
})

console.log(`Writing Categories with Products ${OUT_DIR + OUT_FN}...`)
writeFileSync(OUT_DIR + OUT_FN, JSON.stringify(categories, null, 2))
console.log('done')
