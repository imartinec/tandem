import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Notas from './pages/Notas'
import Economia from './pages/Economia'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notas" element={<Notas />} />
          <Route path="/economia" element={<Economia />} />
        </Routes>
      </main>
    </div>
  )
}
