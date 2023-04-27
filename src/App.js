import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Leaderboard from './components/Leaderboard'
import './components/Footer.css'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
