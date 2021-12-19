import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Clock, Timer, Stopwatch } from './components'

const App: React.FC = () => (
  <div className="App">
    <nav>
      <ul>
        <li><Link to='/clock'>時計</Link></li>
        <li><Link to='/timer'>タイマー</Link></li>
        <li><Link to='/stopwatch'>ストップウォッチ</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route index element={<Clock />} />
      <Route path='clock' element={<Clock />} />
      <Route path='timer' element={<Timer initial={180 * 1000} />} />
      <Route path='stopwatch' element={<Stopwatch />} />
    </Routes>
  </div>
)

export default App
