import React from 'react'

import type { Block, GroupBlock } from '@/types/block'
import { type Breakpoint, Breakpoints } from '@/types'
import BlockFactory from './block-factory'

// eg: 'layout-grid-2-starting-md'
// see comments below regarding dynamic classes and the safelist
const getLayoutInfo = (s: string): {
  layout: string
  spec: any
} | undefined => {
  const tokenArray = s.split(' ')
  const layoutToken = tokenArray.find((tok) => (tok.startsWith('layout-')))
  if (layoutToken) {
    const subtokens = layoutToken.split('-')
    const layout = subtokens[1]
    let spec: any = {}
    switch (layout) {
      case 'grid': {
        const columns = parseInt(subtokens[2], 10)
        const starting = subtokens[4] as Breakpoint
        if (Number.isNaN(columns) || columns < 2 || columns > 6 || !Breakpoints.includes(starting)) {
          return undefined
        }
        spec = {
          columns,
          starting
        }
      } break
      // no other types supported yet
    } 
    return {
      layout,
      spec
    }
  }
  return undefined
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
  if (group.specifiers?.includes('layout')) {
    const layoutSpec = getLayoutInfo(group.specifiers)
    if (!layoutSpec) {
      return <>invalid or missing layout specifier in group block!</>
    }

    if (layoutSpec.layout === 'grid') {
      const { elements } = group
      const { spec: {starting, columns} } = layoutSpec 

        // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
        // All variants in use MUST be in style/safelist.tailwind.js
      const clazzName = 'grid xs:grid-cols-1 gap-2 sm:gap-3 ' + 
        `${starting}:grid-cols-${columns} ` + 
        className
      return (
        <div className={clazzName}>
        {elements.map((block, index) => (
          <BlockFactory block={block} key={index} />
        ))}
        </div>
      )
    }
  }
  return <></>
}

export default GroupBlockComponent
