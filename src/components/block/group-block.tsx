import React from 'react'

import type { Block, GroupBlock } from '@/types/block'
import BlockFactory from './block-factory'

const getNumColumns = (s: string): number => {
  const tokenArray = s.split(' ')
  const colToken = tokenArray.find((tok) => (tok.startsWith('grid-')))
  if (colToken) {
    const subTokenArray = colToken.split('-')
    return parseInt(subTokenArray[1], 10)
  }
  return -1
}

const GroupBlockComponent: React.FC<{
  block: Block
  className?: string,
}> = ({
  block,
  className=''
}) => {

  if (block.blockType !== 'group') {
    return <>group block required</>
  }

  const group = block as GroupBlock

    // only one supported so fat
  if (group.specifiers?.includes('grid')) {
    const numColumns = getNumColumns(group.specifiers)
    if (numColumns === -1) {
      return <>invalid num columns in group</>
    }

    const { elements } = group
    return (
      <div className={'grid grid-cols-1 gap-2 sm:gap-4 md:gap-6 ' + `md:grid-cols-${+numColumns} ` + className}>
      {elements.map((block, index) => (
        <BlockFactory block={block} key={index} />
      ))}
      </div>
    )
  }

  return <></>
}

export default GroupBlockComponent
