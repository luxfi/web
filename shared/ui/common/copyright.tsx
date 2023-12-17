import React from 'react'

const Copyright: React.FC = () => {

  const year = new Date().getFullYear()
  const yearString = (year > 2023) ? `${year} - 2023` : '2023'

  return (
    <>{`Copyright © ${yearString} Lux Partners Ltd. `} <br className='sm:hidden'/> All rights reserved.</> 
  )
}

export default Copyright
