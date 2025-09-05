import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#001b39] text-gray-400 py-16 lg:px-12 md:px-4">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-7xl">
        {/* Brand Section */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-sans font-bold text-white">
              Manhattan <span className="text-amber-500">Motel</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-md">
            Votre destination de rêve pour un séjour inoubliable. Confort et service impeccable vous attendent dans notre établissement d&apos;exception.
          </p>
          {/* Commenté jusqu'à ce que les images soient disponibles
          <div className="flex items-center space-x-4 pt-2">
            {['orange-money', 'mobile-money', 'paypal'].map((payment) => (
              <div key={payment} className="relative w-10 h-6">
                <Image 
                  src={`/assets/payments/${payment}.png`} 
                  alt={`${payment} logo`} 
                  fill
                  className="object-contain opacity-80"
                  sizes="40px"
                />
              </div>
            ))}
          </div>
          */}
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-6">Navigation</h3>
          <ul className="space-y-3">
            {[
              { href: '/', label: 'Accueil' },
              { href: '/chambres', label: 'Chambres & Suites' },
              { href: '/services', label: 'Services' },
              // { href: '/restaurant', label: 'Restaurant' },
              // { href: '/galerie', label: 'Galerie' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="text-sm hover:text-amber-400 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-6">Contact</h3>
            <address className="not-italic space-y-3 text-sm">
              <p className="flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-3 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Localisation: Etoudi<br />Yaoundé, Cameroun
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
               +237 659 407 948 / +237 672 489 289
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@manhattanmotel.com
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href={`https://${social}.com/manhattanmotel`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Suivez-nous sur ${social}`}
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                >
                  <div className="relative w-5 h-5">
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

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} MANHATTAN MOTEL. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-amber-400 transition-colors">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-amber-400 transition-colors">Confidentialité</Link>
            <Link href="/cgv" className="hover:text-amber-400 transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;