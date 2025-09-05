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
    <div className="bg-transparent">
      {/* Bannière supérieure */}
      <div className="bg-[#001b39] text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 sm:gap-6">
          {/* Logo mobile */}
          <div className="flex items-center sm:hidden w-full justify-center">
            <Image src="/logo/logo.png" alt="logo" width={70} height={50} priority />
          </div>

          {/* Contacts */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 w-full sm:w-auto text-center sm:text-left space-y-1 sm:space-y-0">
            <a href="tel:+237659407948" className="flex justify-center sm:justify-start items-center hover:text-amber-400 transition-colors text-xs sm:text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              +237 659 407 948 <span className="hidden sm:inline text-gray-300 text-xs">(Mobile Money)</span>
            </a>

            <a href="tel:+237672489289" className="flex justify-center sm:justify-start items-center hover:text-amber-400 transition-colors text-xs sm:text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              +237 672 489 289 <span className="hidden sm:inline text-gray-300 text-xs">(Orange Money)</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-14 px-2 sm:px-8">
            {/* Logo desktop */}
            {/* <div className="hidden md:flex items-center">
              <Image src="/logo/logo.png" alt="logo" width={80} height={60} priority />
            </div> */}

            {/* Menu desktop */}
            <nav className="hidden md:flex items-center space-x-8 w-full mx-auto justify-between">
              <div className="flex">
                <span className="text-md font-bold text-gray-700 tracking-wider font-serif">MANHATTAN</span>
                <span className="text-md ml-1 font-bold text-amber-600 tracking-wider font-serif">MOTEL</span>
              </div>
              <div className="flex space-x-8 py-2 px-6">
                <NavLink href="/" pathname={pathname}>Accueil</NavLink>
                <NavLink href="/chambres" pathname={pathname}>Chambres</NavLink>
                <NavLink href="/services" pathname={pathname}>Services</NavLink>
                <NavLink href="/#contact" pathname={pathname}>Contact</NavLink>
              </div>
              <BookNowButton />
            </nav>

            {/* Bouton menu mobile */}
              <div className="flex lg:hidden">
                <span className="text-sm font-bold text-gray-700 tracking-wider font-serif">MANHATTAN</span>
                <span className="text-sm ml-1 font-bold text-amber-600 tracking-wider font-serif">MOTEL</span>
              </div>
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
  className={`md:hidden relative ${mobileMenuOpen ? 'mobile_menu' : 'display_menu'}`}
  
>
 
  <div className="flex flex-col items-center justify-center h-full space-y-4 text-lg pb-8">
    <MobileNavLink href="/" pathname={pathname} onClick={() => setMobileMenuOpen(false)}>Accueil</MobileNavLink>
    <MobileNavLink href="/chambres" pathname={pathname} onClick={() => setMobileMenuOpen(false)}>Chambres</MobileNavLink>
    <MobileNavLink href="/services" pathname={pathname} onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
    {/* <MobileNavLink href="/galerie" pathname={pathname} onClick={() => setMobileMenuOpen(false)}>Galerie</MobileNavLink> */}
    <MobileNavLink href="/#contact" pathname={pathname} onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
    <BookNowButton onClick={() => setMobileMenuOpen(false)} />
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
    className="inline-flex items-center px-6 py-2 rounded-md text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors"
  >
    Réserver
  </Link>
);

export default Navbar;
