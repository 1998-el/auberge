'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  MobileNavLinkComponent: React.ComponentType<{
    href: string;
    pathname: string;
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
  }>;
  BookNowButtonComponent: React.ComponentType<{ mobile?: boolean; onClick?: () => void }>;
}

const MobileMenu = ({
  isOpen,
  onClose,
  pathname,
  buttonRef,
  MobileNavLinkComponent,
  BookNowButtonComponent,
}: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose, buttonRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden fixed inset-0 z-50"
        >
          {/* Overlay avec flou */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Menu mobile */}
          <motion.div
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring', 
              stiffness: 400,
              damping: 30,
              mass: 0.8
            }}
            className="fixed right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header du menu */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-50 transition-colors"
                aria-label="Fermer le menu"
              >
                <svg 
                  className="w-6 h-6 text-gray-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Contenu du menu */}
            <div className="p-6">
              <nav className="mb-8">
                <ul className="space-y-4">
                  {[
                    { href: '/', label: 'Accueil' },
                    { href: '/chambres', label: 'Nos Chambres' },
                    { href: '/services', label: 'Services' },
                    { href: '/contact', label: 'Contact' },
                  ].map((item) => (
                    <li key={item.href}>
                      <MobileNavLinkComponent
                        href={item.href}
                        pathname={pathname}
                        onClick={onClose}
                        className={`
                          block py-3 px-4 rounded-lg transition-colors
                          ${pathname === item.href 
                            ? 'bg-amber-50 text-amber-700 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                          }
                        `}
                      >
                        {item.label}
                      </MobileNavLinkComponent>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="pt-4 border-t border-gray-100">
                <BookNowButtonComponent 
                  mobile 
                  onClick={onClose} 
                />
              </div>
            </div>

            {/* Footer du menu */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;