import { useEffect, useReducer } from 'react'

export type Action = { type: 'start' | 'stop'; payload?: unknown }

type Control = {
  start: () => void
  stop: () => void
}

type State = 'RUNNING' | 'STOPPED'

type Options = {
  interval: number
  autostart: boolean
  onUpdate?: () => void
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'start':
      return 'RUNNING'
    case 'stop':
      return 'STOPPED'
    default:
      return state
  }
}

export const useInterval = ({
  interval = 1000,
  autostart = false,
  onUpdate,
}: Partial<Options>): [State, Control] => {
  const [state, dispatch] = useReducer(reducer, 'STOPPED')
  const start = () => {
    dispatch({ type: 'start' })
  }
  const stop = () => {
    dispatch({ type: 'stop' })
  }
  useEffect(() => {
    if (autostart) {
      dispatch({ type: 'start' })
    }
  }, [autostart])
  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined = undefined
    if (state === 'RUNNING') {
      timerId = setInterval(() => {
        onUpdate && onUpdate()
      }, interval)
    } else {
      timerId && clearInterval(timerId)
    }
    return () => {
      timerId && clearInterval(timerId)
    }
  }, [interval, state, onUpdate])
  return ['STOPPED', { start, stop }]
}

export default useInterval
