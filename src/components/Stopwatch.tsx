import React, { useCallback, useState } from 'react'
import useInterval from '../hooks/useInterval'

const interval = 10

export const Stopwatch: React.FC = () => {
  const [time, setTime] = useState(0)
  const update = useCallback((t: number) => setTime(t), [])
  const [, { start, stop }] = useInterval({
    interval,
    onUpdate: () => update(time + interval),
  })
  return (
    <>
      <h1>ストップウォッチ</h1>
      <p>{format(time)}</p>
      <div>
        <button onClick={() => start()}>start</button>
        <button onClick={() => stop()}>stop</button>
      </div>
    </>
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

export default Stopwatch
