import { Link } from 'react-router-dom'

export default function Economia() {
  return (
    <div className="p-4">
      <Link to="/" className="text-blue-600 underline">&larr; Volver al inicio</Link>
      <h2 className="text-2xl font-bold mt-4">💰 Economía</h2>
      <p>Acá va tu control de ingresos y retiros.</p>
    </div>
  )
}
