'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import MobileMenu from './MobileMenu';
import MenuIcon from '../icons/MenuIcon';
import GlobeIcon from '../icons/GlobeIcon';


const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        setToastMessage('');
      }, 3000); // Hide toast after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleLanguage = () => {
    setToastMessage('Les langues ne sont pas encore disponibles pour le moment.');
    setShowToast(true);
    // Original language change logic is commented out as per request
    // const currentLocale = pathname.startsWith('/fr') ? 'fr' : 'en';
    // const newLocale = currentLocale === 'fr' ? 'en' : 'fr';
    // const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    // const newPath = `/${newLocale}${pathWithoutLocale}`;
    // router.push(newPath);
    // router.refresh();
  };

  return (
    <>
      {showToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg text-sm">
          {toastMessage}
        </div>
      )}
      {/* HEADER principal */}
      <header
        className={`fixed top-0 w-full z-50 border-b transition-colors duration-200 ${
          scrolled ? 'bg-white border-gray-200 shadow-sm' : 'bg-white border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="logo motel"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="font-semibold text-gray-900">MANHATTAN</span>
            <span className="ml-1 text-amber-600">MOTEL</span>
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/" pathname={pathname}>Accueil</NavLink>
            <NavLink href="/chambres" pathname={pathname}>Chambres</NavLink>
            <NavLink href="/services" pathname={pathname}>Services</NavLink>
            <NavLink href="/contact" pathname={pathname}>Contact</NavLink>
            <BookNowButton text="Réserver" />
            <button
              onClick={toggleLanguage}
              className="ml-2 flex items-center text-sm text-gray-500 hover:text-gray-800"
            >
              <GlobeIcon className="w-4 h-4 mr-1" />
              {pathname.startsWith('/fr') ? 'EN' : 'FR'}
            </button>
          </nav>

          {/* Bouton mobile */}
          <button
            ref={buttonRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <MobileMenu
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
            pathname={pathname}
            buttonRef={buttonRef}
            MobileNavLinkComponent={MobileNavLink}
            BookNowButtonComponent={BookNowButton}
          />
        </div>
      </header>
    </>
  );
};

/* --------- COMPONENTS --------- */
const NavLink: React.FC<{ href: string; pathname: string; children: React.ReactNode }> = ({
  href,
  pathname,
  children,
}) => (
  <Link href={href}>
    <span
      className={`text-sm font-medium transition-colors ${
        pathname === href ? 'text-amber-600' : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {children}
    </span>
  </Link>
);

const BookNowButton: React.FC<{ text?: string; onClick?: () => void; className?: string }> = ({
  text = 'Réserver',
  onClick,
  className = '',
}) => (
  <Link
    href="/reservation"
    onClick={onClick}
    className={`inline-flex items-center px-4 py-1.5 rounded-md bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium transition-colors ${className}`}
  >
    {text}
  </Link>
);

const MobileNavLink: React.FC<{
  href: string;
  pathname: string;
  children: React.ReactNode;
  onClick: () => void;
}> = ({ href, pathname, children, onClick }) => (
  <Link href={href} onClick={onClick}>
    <div
      className={`py-3 border-b text-base ${
        pathname === href ? 'text-amber-600 font-medium' : 'text-gray-700 hover:text-gray-900'
      }`}
    >
      {children}
    </div>
  </Link>
);

export default Navbar;
