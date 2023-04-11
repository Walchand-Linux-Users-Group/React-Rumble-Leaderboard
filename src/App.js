import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Leaderboard from './components/Leaderboard'
import Home from './components/Home'
import Footer from './components/Footer'
import './components/Footer.css'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/leaderboard' element={<Leaderboard />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      <Header />
      <Card />
    </>
  )
}

export default App
