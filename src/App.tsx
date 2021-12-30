import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Tabs, Tab } from './components/molecule/Tabs'
import Clock from './components/organism/Clock'
import Timer from './components/organism/Timer'
import Stopwatch from './components/organism/Stopwatch'

const App: React.FC = () => {
  const location = useLocation()
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">React-Clock</h1>
      <Tabs>
        <div className="grow">
          <Link className="flex" to="/clock">
            <Tab
              title="時計"
              selected={
                location.pathname === '/' || location.pathname === '/clock'
              }
            />
          </Link>
        </div>
        <div className="grow">
          <Link className="flex" to="/timer">
            <Tab title="タイマー" selected={location.pathname === '/timer'} />
          </Link>
        </div>
        <div className="grow">
          <Link className="flex" to="/stopwatch">
            <Tab
              title="ストップウォッチ"
              selected={location.pathname === '/stopwatch'}
            />
          </Link>
        </div>
      </Tabs>
      <div className="py-4">
        <Routes>
          <Route index element={<Clock />} />
          <Route path="clock" element={<Clock />} />
          <Route path="timer" element={<Timer initial={180 * 1000} />} />
          <Route path="stopwatch" element={<Stopwatch />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
