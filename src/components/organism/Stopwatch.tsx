import React, { useCallback, useState } from 'react'
import { TimerDisplay } from '../molecule/TimerDisplay'
import { Button } from '../atom/Button'
import useInterval from '../../hooks/useInterval'

const interval = 10

export const Stopwatch: React.FC = () => {
  const [time, setTime] = useState(0)
  const update = useCallback((t: number) => setTime(t), [])
  const [, { start, stop }] = useInterval({
    interval,
    onUpdate: () => update(time + interval),
  })
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

export default Stopwatch
