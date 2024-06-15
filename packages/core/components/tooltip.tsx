'use client'
import React from 'react'
import { Tooltip as RTTooltip, type PlacesType } from 'react-tooltip'

const Tooltip: React.FC<{
  select: string
  text: string
  place?: PlacesType // https://react-tooltip.com/docs/options
  clx?: string
}> = ({
  select,
  text,
  clx='',
  place='bottom'
}) => (
  <RTTooltip 
    anchorSelect={select} 
    noArrow 
    opacity={1} 
    content={text} 
    place={place}
    offset={2}
    delayShow={100}
    delayHide={100}
    className={'!opacity-100 !bg-level-2 border rounded-[3px] !px-1.5 !py-1 z-10' + clx}
  />
)

export default Tooltip
