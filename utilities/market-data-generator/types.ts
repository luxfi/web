interface ItemImportData {
  tok: string
  shortTitle?: string
  img?: string
  desc?: string
}

interface LevelImportData {
  tok: string
  titleToken?: string
  label: string
  img?: string
  desc?: string
  ch: LevelImportData[] | ItemImportData[]
}

export {
  type ItemImportData,
  type LevelImportData
}