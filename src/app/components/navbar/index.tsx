'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 px-18 ${scrolled ? 'bg-white shadow-sm' : 'bg-white/90 backdrop-blur-md'}`}>
      <div className="container mx-auto ">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-serif text-gray-800" onClick={() => setMobileOpen(false)}>
            MANHATTAN<span className="text-amber-600"> MOTEL</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" pathname={pathname}>Accueil</NavLink>
            <NavLink href="/chambres" pathname={pathname}>Chambres</NavLink>
            <NavLink href="/services" pathname={pathname}>Services</NavLink>
            {/* <NavLink href="/galerie" pathname={pathname}>Galerie</NavLink> */}
            <NavLink href="/contact" pathname={pathname}>Contact</NavLink>
            <BookNowButton />
          </nav>

          <button 
            ref={buttonRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <motion.div
              animate={mobileOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              className="w-6"
            >
              <motion.div
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                className="h-0.5 bg-gray-700 mb-1.5"
              />
              <motion.div
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="h-0.5 bg-gray-700"
              />
              <motion.div
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                className="h-0.5 bg-gray-700 mt-1.5"
              />
            </motion.div>
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={mobileOpen} 
        onClose={() => setMobileOpen(false)} 
        pathname={pathname}
        buttonRef={buttonRef}
        MobileNavLinkComponent={MobileNavLink}
        BookNowButtonComponent={BookNowButton}
      />
    </header>
  );
};

const NavLink = ({ href, pathname, children }: { href: string, pathname: string, children: React.ReactNode }) => (
  <Link
    href={href}
    className={`text-sm uppercase tracking-wider transition-colors ${
      pathname === href ? 'text-amber-600' : 'text-gray-600 hover:text-amber-500'
    }`}
  >
    {children}
  </Link>
);

const BookNowButton = ({ 
  mobile = false, 
  onClick, 
  className = '' 
}: { 
  mobile?: boolean, 
  onClick?: () => void, 
  className?: string 
}) => (
  <Link
    href="/reservation"
    onClick={onClick}
    className={`inline-flex items-center px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-medium transition-colors ${
      mobile ? 'text-base' : 'text-sm'
    } ${className}`}
  >
    Réserver
  </Link>
);

const MobileNavLink = ({ href, pathname, children, onClick }: { href: string, pathname: string, children: React.ReactNode, onClick: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`py-4 px-2 text-lg transition-colors ${pathname === href ? 'text-amber-600' : 'text-gray-700 hover:bg-gray-50'}`}
  >
    {children}
  </Link>
);

export default Navbar;