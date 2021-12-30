import React from 'react'
import { Digit } from '../atom/Digit'
import { Dots } from '../atom/Dots'
import { ChevronButton } from '../atom/ChevronButton'

interface CellProps {
  num: number
  max: number
  editable?: boolean
  onClick?: (value: number) => void
}

const Cell: React.FC<CellProps> = ({ num, max, editable = false, onClick }) => (
  <div className="relative">
    <Digit num={num} />
    {editable && (
      <div className="absolute top-0">
        <ChevronButton
          type="up"
          onClick={() => onClick && onClick(num === max ? -1 * max : 1)}
        />
      </div>
    )}
    {editable && (
      <div className="absolute bottom-0">
        <ChevronButton
          type="down"
          onClick={() => onClick && onClick(num === 0 ? max : -1)}
        />
      </div>
    )}
  </div>
)

export interface TimerDisplayProps {
  time: number
  editable?: boolean
  onUpdate?: (value: number) => void
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({
  time,
  editable = false,
  onUpdate,
}) => {
  const formatted = format(time)
  return (
    <div className="flex">
      <Cell
        num={Number(formatted[0])}
        max={5}
        editable={editable}
        onClick={value => onUpdate && onUpdate(10 * 60 * 60 * 1000 * value)}
      />
      <Cell
        num={Number(formatted[1])}
        max={9}
        editable={editable}
        onClick={value => onUpdate && onUpdate(1 * 60 * 60 * 1000 * value)}
      />
      <Dots value=":" />
      <Cell
        num={Number(formatted[3])}
        max={5}
        editable={editable}
        onClick={value => onUpdate && onUpdate(10 * 60 * 1000 * value)}
      />
      <Cell
        num={Number(formatted[4])}
        max={9}
        editable={editable}
        onClick={value => onUpdate && onUpdate(1 * 60 * 1000 * value)}
      />
      <Dots value=":" />
      <Cell
        num={Number(formatted[6])}
        max={5}
        editable={editable}
        onClick={value => onUpdate && onUpdate(10 * 1000 * value)}
      />
      <Cell
        num={Number(formatted[7])}
        max={9}
        editable={editable}
        onClick={value => onUpdate && onUpdate(1 * 1000 * value)}
      />
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
