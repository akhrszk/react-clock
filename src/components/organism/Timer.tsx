import React, { useCallback, useEffect, useState } from 'react'
import { TimerDisplay } from '../molecule/TimerDisplay'
import { Button } from '../atom/Button'
import useInterval from '../../hooks/useInterval'

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
  }, [time])
  return (
    <div>
      <TimerDisplay time={time} />
      <div className="flex gap-3">
        <Button label="start" size="large" onClick={() => start()} primary />
        <Button label="stop" size="large" onClick={() => stop()} primary />
      </div>
    </div>
  )
}

export default Timer
