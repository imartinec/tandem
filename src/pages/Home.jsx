import { Link } from 'react-router-dom'
import { FaRegStickyNote, FaWallet } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex flex-col justify-center items-center px-4 text-center text-gray-800">
      <h1 className="text-4xl font-bold mb-4">📋 Bienvenido a <span className="text-blue-900">Tándem</span></h1>
      <p className="text-lg max-w-md mb-8">
        Tu agenda personal para llevar el control de tus <span className="font-semibold text-emerald-900">notas</span> y tu <span className="font-semibold text-blue-900">economía</span> diaria.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <Link to="/notas" className="flex items-center gap-2 bg-emerald-900 text-white px-6 py-3 rounded hover:bg-emerald-800 transition">
          <FaRegStickyNote /> Notas
        </Link>
        <Link to="/economia" className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
          <FaWallet /> Economía
        </Link>
      </div>
    </div>
  )
}
