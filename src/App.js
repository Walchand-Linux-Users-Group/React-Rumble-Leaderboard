import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import Leaderboard from './components/Leaderboard'
import './components/Footer.css'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/leaderboard' element={<Leaderboard/>}/>
        <Route exact path='/' element={<Card/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
