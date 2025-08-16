'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ReservationForm from './ReservationForm';
import { X } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="bg-transparent rounded-lg w-full "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <ReservationForm />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;
