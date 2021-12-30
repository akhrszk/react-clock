import React from 'react'
import { Digit } from '../atom/Digit'
import { Dots } from '../atom/Dots'

export interface ClockDisplayProps {
  timestamp: number
}

export const ClockDisplay: React.FC<ClockDisplayProps> = ({ timestamp }) => {
  const formatted = format(timestamp)
  return (
    <div className="flex">
      <Digit num={formatted[0]} />
      <Digit num={formatted[1]} />
      <Dots value=":" />
      <Digit num={formatted[3]} />
      <Digit num={formatted[4]} />
      <Dots value=":" />
      <Digit num={formatted[6]} />
      <Digit num={formatted[7]} />
    </div>
  )
}

const format = (timestamp: number) => {
  const date = new Date(timestamp)
  const hh = `0${date.getHours()}`.slice(-2)
  const mm = `0${date.getMinutes()}`.slice(-2)
  const ss = `0${date.getSeconds()}`.slice(-2)
  return `${hh}:${mm}:${ss}`
}

export default ClockDisplay
