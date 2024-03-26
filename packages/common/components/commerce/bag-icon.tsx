import React from 'react'

const BagIcon: React.FC<{
  width: number
  height: number
  className?: string
}> = ({
  width,
  height,
  className=''
}) => (
    // 20x23
  <svg width={width} height={height} fill="currentColor" viewBox='0 0 20 23' className={className}>
    <path fillRule="evenodd" d="M5 5a5 5 0 0 1 10 0v1h-2V5a3 3 0 1 0-6 0v1H5V5Zm0 1v4h2V6h6v4h2V6h3.5a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1H5Z" clipRule="evenodd"/>
  </svg>
)

export default BagIcon
