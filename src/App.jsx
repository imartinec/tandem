import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Notas from './pages/Notas'
import Economia from './pages/Economia'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/economia" element={<Economia />} />
      </Routes>
    </>
  )
}