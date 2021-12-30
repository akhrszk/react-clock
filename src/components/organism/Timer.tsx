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
  const [state, { start, stop }] = useInterval({
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
      <TimerDisplay
        time={time}
        editable={state !== 'RUNNING'}
        onUpdate={value => setTime(time + value)}
      />
      <div className="flex gap-3 py-3">
        <Button
          label="start"
          size="large"
          onClick={() => time && start()}
          primary
        />
        <Button
          label="reset"
          size="large"
          onClick={() => state !== 'RUNNING' && setTime(initial)}
          primary
        />
        <Button label="stop" size="large" onClick={() => stop()} primary />
      </div>
    </div>
  )
}

export default Timer
