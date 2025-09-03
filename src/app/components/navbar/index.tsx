'use client';

import { useState, useEffect, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-transparent ">
      {/* Bannière supérieure */}
      <div className="bg-[#001b39] text-white text-sm py-2 px-4 h-18 flex items-center justify-between ">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo/logo.png" alt="logo" width={80} height={60} priority />
 
          </div>

          {/* Contacts */}
          <div className="flex items-center space-x-6">
            {/* Numéro principal */}
         

            {/* Mobile Money */}
            <a href="tel:+237659407948" className="flex items-center hover:text-amber-400 transition-colors">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>+237 659 407 948 <span className="text-xs text-gray-300">(Mobile Money)</span></span>
            </a>

            {/* Orange Money */}
            <a href="tel:+237672489289" className="flex items-center hover:text-amber-400 transition-colors">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>+237 672 489 289 <span className="text-xs text-gray-300">(Orange Money)</span></span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <header
        className={`w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'fixed top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center h-14 px-8">
            {/* Menu desktop */}
            <nav className="hidden md:flex items-center space-x-8 w-full mx-auto justify-center">
              <div className='flex '>
                <span className="text-md  flex font-bold text-gray-700  tracking-wider font-serif">MANHATTAN</span>
                <span className="text-md  ml-1 flex font-bold text-amber-600 tracking-wider font-serif">MOTEL</span>
              </div>
              
              <div className="relative w-full flex justify-center">
    
                <div className="flex space-x-8 py-2 px-6">
                  <NavLink href="/" pathname={pathname}>Accueil</NavLink>
                  <NavLink href="/chambres" pathname={pathname}>Chambres</NavLink>
                  <NavLink href="/services" pathname={pathname}>Services</NavLink>
                  {/* <NavLink href="/galerie" pathname={pathname}>Galerie</NavLink> */}
                  <NavLink href="/#contact" pathname={pathname}>Contact</NavLink>
                </div>
              </div>
              <div>
                <BookNowButton onClick={undefined} />
              </div>
            </nav>

            {/* Bouton menu mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 focus:outline-none z-50"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <MobileNavLink href="/" pathname={pathname} onClick={() => setMobileMenuOpen(false)}>Accueil</MobileNavLink>
            <MobileNavLink href="/chambres" pathname={pathname} onClick={() => setMobileMenuOpen(false)}>Chambres</MobileNavLink>
            <MobileNavLink href="/services" pathname={pathname} onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="/galerie" pathname={pathname} onClick={() => setMobileMenuOpen(false)}>Galerie</MobileNavLink>
            <MobileNavLink href="/contact" pathname={pathname} onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
            <div className="pt-4">
              <BookNowButton onClick={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

// Composants internes
const NavLink = ({ href, pathname, children }: { href: string; pathname: string; children: ReactNode }) => (
  <Link
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
      pathname === href
        ? 'text-amber-600 font-semibold'
        : 'text-gray-700 hover:text-amber-600'
    }`}
  >
    {children}
    {pathname === href && <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-amber-600"></span>}
  </Link>
);

const MobileNavLink = ({ href, pathname, onClick, children }: { href: string; pathname: string; onClick: () => void; children: ReactNode }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`text-lg font-medium px-4 py-2 rounded-md ${
      pathname === href ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
    }`}
  >
    {children}
  </Link>
);

const BookNowButton = ({ onClick }: { onClick?: () => void }) => (
  <Link
    href="/reservation"
    onClick={onClick}
    className="inline-flex items-center px-5 py-2 rounded-md text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors"
  >
    Réserver
  </Link>
);

export default Navbar;
