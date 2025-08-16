'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url(/assets/detente_cmr.jpg)" }}
    >
      <div className="bg-black/50 backdrop-blur-sm p-12 rounded-xl shadow-2xl text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page non trouvée</h2>
        <p className="mb-8 max-w-sm">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link 
          href="/"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
