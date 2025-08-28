'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page non trouvée</h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors duration-200"
      >
        Retour à la page d'accueil
      </Link>
    </div>
  )
}
