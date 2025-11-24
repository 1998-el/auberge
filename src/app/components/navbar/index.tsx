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
    {/* Bannière supérieure - Version améliorée mobile */}
<div className="bg-[#001b39] text-white py-2 px-8 sm:py-2 sm:px-4 ">
  <div className="max-w-7xl mx-auto px-3">
    {/* Layout mobile empilé */}
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-center gap-2 sm:gap-4">
      
      {/* Logo mobile - Centré en haut */}
      <div className="flex justify-center sm:hidden pb-1 border-b border-gray-700/50">
        <div className="relative w-16 h-12">
          <Image 
            src="/logo/logo.png" 
            alt="logo" 
            fill
            className="object-contain"
            priority
            sizes="64px"
          />
        </div>
      </div>

      {/* Contacts - Réorganisé pour mobile */}
      <div className="flex flex-col xs:flex-row xs:justify-between sm:flex-row sm:items-center sm:space-x-4 lg:space-x-6 w-full sm:w-auto space-y-1 xs:space-y-0 sm:space-y-0">
        
        {/* Premier numéro */}
        <div className="flex flex-col xs:flex-row items-center justify-between xs:space-x-2 sm:space-x-3">
          <a 
            href="tel:+237659407948" 
            className="flex items-center justify-center xs:justify-start hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm group flex-1"
          >
            <span className="relative flex items-center min-w-0">
              <span className="hidden xs:inline mr-1">📱</span>
              +237 659 407 948
              <span className="hidden sm:inline text-gray-300 text-xs pl-2 whitespace-nowrap">
                (Mobile Money)
              </span>
            </span>
          </a>

        </div>

        {/* Séparateur visuel */}
        <div className="hidden xs:block w-px h-4 bg-gray-600 mx-1"></div>

        {/* Deuxième numéro */}
        <div className="flex flex-col xs:flex-row items-center justify-between xs:space-x-2 sm:space-x-3">
          <a 
            href="tel:+237672489289" 
            className="flex items-center justify-center xs:justify-start hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm group flex-1"
          >
            <span className="relative flex items-center min-w-0">
              <span className="hidden xs:inline mr-1">📞</span>
              +237 672 489 289
              <span className="hidden sm:inline text-gray-300 text-xs pl-2 whitespace-nowrap">
                (Orange Money)
              </span>
            </span>
          </a>

        </div>
      </div>

      {/* Réseaux sociaux - Optimisé mobile */}
      <div className="hidden lg:flex justify-center pt-1 sm:pt-0 border-t border-gray-700/50 sm:border-t-0">
        <div className="flex space-x-2 sm:space-x-3">
          {['facebook', 'instagram', 'linkedin'].map((social) => (
            <a 
              key={social} 
              href={`https://${social}.com/manhattanmotel`} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Suivez-nous sur ${social}`}
              className="text-gray-400 hover:text-amber-400 transition-all duration-200 border border-gray-600 p-1.5 sm:p-2 rounded-full bg-amber-50/5 hover:bg-amber-600/20 active:scale-95 active:bg-amber-600/30"
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <Image 
                  src={`/social/${social}.png`} 
                  alt={`${social} icon`} 
                  fill
                  className="object-contain"
                  sizes="20px"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>

   
  </div>
</div>
      {/* Navigation principale */}
      <header
        className={`w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'fixed top-0  bg-white/95 backdrop-blur-sm border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className=" lg:py-2 md:px-4 sm:px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 sm:gap-6 md:px-4 px-4">
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
