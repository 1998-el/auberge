'use client';

import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';
import Link from 'next/link';

export default function ReservationPage() {
  return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-md w-full text-center"
      >
        <div className="flex justify-center mb-6">
          <Construction size={48} className="text-gray-400" />
        </div>
        
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Réservation en cours de développement
        </h1>
        
        <p className="text-gray-500 mb-8">
          Nous travaillons à vous offrir une expérience de réservation optimale.
        </p>

        <div className="mb-8">
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Link
              href="/"
              className="inline-block px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Retour à l&apos;accueil
            </Link>
          </motion.div>
        </div>

        <div className="text-xs text-gray-400 flex items-center justify-center">
          <Construction size={12} className="mr-1.5" />
          Disponible prochainement
        </div>
      </motion.div>
    </div>
  );
}