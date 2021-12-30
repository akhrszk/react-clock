import React from 'react'
import { Digit } from '../atom/Digit'
import { Dots } from '../atom/Dots'

export interface TimerDisplayProps {
  time: number
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
  const formatted = format(time)
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
      <Dots value="." />
      <Digit num={formatted[9]} />
      <Digit num={formatted[10]} />
    </div>
  )
}

const format = (time: number) => {
  const milliseconds = time % 1000
  const seconds = Math.floor(time / 1000)
  const millis = `${milliseconds}0`.slice(0, 2)
  const ss = `0${seconds % 60}`.slice(-2)
  const mm = `0${Math.floor((seconds % (60 * 60)) / 60)}`.slice(-2)
  const hh = `0${Math.floor(seconds / (60 * 60))}`.slice(-2)
  return `${hh}:${mm}:${ss}.${millis}`
}

export default TimerDisplay
