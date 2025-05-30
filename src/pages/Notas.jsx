import { Link } from 'react-router-dom'

export default function Notas() {
  return (
    <div className="p-4">
      <Link to="/" className="text-blue-600 underline">&larr; Volver al inicio</Link>
      <h2 className="text-2xl font-bold mt-4">📝 Notas</h2>
      <p>Acá vas a poder escribir tus notas personales.</p>
    </div>
  )
}
