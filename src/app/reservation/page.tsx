'use client'

import { motion } from 'framer-motion'

import ReservationForm from '../components/ReservationForm'
import WhatsAppButton from '../components/ui/WhatsAppButton'

export default function ReservationPage() {
  return (
    <div className="min-h-screen border w-full bg-white flex flex-col items-center justify-center p-6 pt-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-md w-full"
      >
     

        {/* Formulaire */}
        <ReservationForm />

        {/* Bouton retour */}
        {/* <div className="mt-8 flex justify-center">
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              ← Retour à l&apos;accueil
            </Link>
          </motion.div>
        </div> */}

        {/* Bouton WhatsApp */}
        <div className="mt-6 flex justify-center">
          <WhatsAppButton />
        </div>
      </motion.div>
    </div>
  )
}
