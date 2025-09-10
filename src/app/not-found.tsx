'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
    //   <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
    //   <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page non trouvée</h2>
    //   <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
    //     Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
    //   </p>
    //   <Link
    //     href="/"
    //     className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors duration-200"
    //   >
    //     Retour à la page d&apos;accueil
    //   </Link>
    // </div>
         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-transparent rounded-2xl  p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">⚠️ Oups !</h2>
          <p className="text-gray-700 mb-6">
            Le site est momentanément indisponible.<br />
            Veuillez nous excuser pour la gêne occasionnée.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="mailto:pmounkam8@gmail.com"
              className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
            >
              Contacter le support
            </Link>

          
          </div>
        </div>
      </div>
  )
}
