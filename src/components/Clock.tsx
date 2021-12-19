import React, { useCallback, useState } from 'react'
import useInterval from '../hooks/useInterval'

export const Clock: React.FC = () => {
  const [timestamp, setTimestamp] = useState(now())
  const update = useCallback((t) => setTimestamp(t), [])
  useInterval({
    onUpdate: () => {
      update(now())
    },
    autostart: true,
  })
  return (
    <>
      <h1>時計</h1>
      <p>{format(timestamp)}</p>
    </>
  )
}

const now = () => new Date().getTime()
const format = (timestamp: number) => {
  const date = new Date(timestamp)
  const hh = `0${date.getHours()}`.slice(-2)
  const mm = `0${date.getMinutes()}`.slice(-2)
  const ss = `0${date.getSeconds()}`.slice(-2)
  return `${hh}:${mm}:${ss}`
}

export default Clock
