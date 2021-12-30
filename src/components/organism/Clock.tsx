import React, { useCallback, useState } from 'react'
import { ClockDisplay } from '../molecule/ClockDisplay'
import useInterval from '../../hooks/useInterval'

const interval = 100

export const Clock: React.FC = () => {
  const [timestamp, setTimestamp] = useState(now())
  const update = useCallback(t => setTimestamp(t), [])
  useInterval({
    interval,
    onUpdate: () => {
      update(now())
    },
    autostart: true,
  })
  return (
    <div>
      <ClockDisplay timestamp={timestamp} />
    </div>
  )
}

const now = () => new Date().getTime()

export default Clock
