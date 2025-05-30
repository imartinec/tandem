import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-blue-900 text-white px-4 py-3">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-xl font-bold">Tándem</h1>
        <button onClick={() => setOpen(!open)} className="text-2xl md:hidden">
          {open ? <FiX /> : <FiMenu />}
        </button>
        <ul className={`md:flex gap-6 ${open ? 'block mt-4' : 'hidden'} md:mt-0`}>
          <li><Link to="/" onClick={() => setOpen(false)} className="hover:text-gray-300">Inicio</Link></li>
          <li><Link to="/notas" onClick={() => setOpen(false)} className="hover:text-gray-300">Notas</Link></li>
          <li><Link to="/economia" onClick={() => setOpen(false)} className="hover:text-gray-300">Economía</Link></li>
        </ul>
      </div>
    </nav>
  )
}
