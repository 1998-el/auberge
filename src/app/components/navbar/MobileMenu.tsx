'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  buttonRef: React.RefObject<HTMLButtonElement>;
  MobileNavLinkComponent: React.FC<{
    href: string;
    pathname: string;
    children: React.ReactNode;
    onClick: () => void;
  }>;
  BookNowButtonComponent: React.FC<{ text?: string; onClick?: () => void; className?: string }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  pathname,
  buttonRef,
  MobileNavLinkComponent,
  BookNowButtonComponent,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col px-6 pb-20"
        >
          <motion.nav
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-sm mx-auto flex flex-col divide-y divide-gray-200 dark:divide-gray-700"
          >
            <MobileNavLinkComponent href="/" pathname={pathname} onClick={onClose}>
              <span className="block py-4 text-base font-medium text-gray-800 dark:text-gray-100 hover:text-amber-600 transition-colors">
                Accueil
              </span>
            </MobileNavLinkComponent>

            <MobileNavLinkComponent href="/chambres" pathname={pathname} onClick={onClose}>
              <span className="block py-4 text-base font-medium text-gray-800 dark:text-gray-100 hover:text-amber-600 transition-colors">
                Chambres
              </span>
            </MobileNavLinkComponent>

            <MobileNavLinkComponent href="/services" pathname={pathname} onClick={onClose}>
              <span className="block py-4 text-base font-medium text-gray-800 dark:text-gray-100 hover:text-amber-600 transition-colors">
                Services
              </span>
            </MobileNavLinkComponent>

            <MobileNavLinkComponent href="/contact" pathname={pathname} onClick={onClose}>
              <span className="block py-4 text-base font-medium text-gray-800 dark:text-gray-100 hover:text-amber-600 transition-colors">
                Contact
              </span>
            </MobileNavLinkComponent>
          </motion.nav>

          {/* CTA bouton en bas */}
          <div className="mt-8">
            <BookNowButtonComponent
              text="Réserver"
              onClick={onClose}
              className="w-full py-2"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
