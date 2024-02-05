import React from 'react'

import type { BlockComponentProps } from '@luxdefi/ui/blocks'
import type ElementTableBlock from '../def/element-table'

const bgClassFromLocation = (row: number, column: number) => {
  if (row % 2 === 0 && column % 2 === 0) {
    return 'bg-background'
  }
  else if (row % 2 === 1 && column % 2 === 0 || row % 2 === 0 && column % 2 === 1 ) {
    return 'bg-level-1'
  }
  return 'bg-level-2'
}

const ElementTableBlockComponent: React.FC<BlockComponentProps> = ({
  block,
  className=''
}) => {
  
  if (block.blockType !== 'element-table') {
    return <>element table block required</>
  }

  const b = block as ElementTableBlock 

  return (
    <table className='!text-sm/5 '>
    {b.elements.map((rowElements, rowIndex) => (
      <tr key={rowIndex}>
      {rowElements.map((tdElements, columnIndex) => ( 
        <td key={columnIndex} className={'p-6 ' + bgClassFromLocation(rowIndex, columnIndex)} >
          <div className='flex flex-col align-center text-center font-bold'>
            {tdElements.element}
          </div> 
        </td> 
      ))}
      </tr>
    ))}
    </table>
  )
}

export default ElementTableBlockComponent
