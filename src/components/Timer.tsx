import React, { useCallback, useEffect, useState } from 'react'
import useInterval from '../hooks/useInterval'

type Props = {
  // ミリ秒指定
  initial: number
}

const interval = 10

export const Timer: React.FC<Props> = ({ initial }) => {
  const [time, setTime] = useState(initial)
  const update = useCallback(t => setTime(t), [])
  const [, { start, stop }] = useInterval({
    interval,
    onUpdate: () => update(time - interval),
  })
  useEffect(() => {
    if (time <= 0) {
      stop()
    }
  }, [time, stop])
  return (
    <>
      <h1>タイマー</h1>
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

export default Timer
