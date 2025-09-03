'use client';

import { useCallback, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    { src: '/images/img_4.jpg', alt: 'Chambre d\'hôtel luxueuse' },
    { src: '/images/img_5.jpg', alt: 'Hall d\'entrée élégant' },
    { src: '/images/img_8.jpg', alt: 'Piscine panoramique' },
    { src: '/images/img_14.jpg', alt: 'Chambre spacieuse et moderne' }
  ];

  const startSlideshow = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);
  }, [images.length]);

  const stopSlideshow = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startSlideshow();
    return () => stopSlideshow();
  }, [startSlideshow, stopSlideshow]);

  return (
    <section 
      className="relative h-screen overflow-hidden"
      onMouseEnter={stopSlideshow}
      onMouseLeave={startSlideshow}
    >
      {/* Fond avec images */}
      <div className="absolute inset-0 -z-10">
        {images.map((img, index) => (
          <div 
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${ index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={index === 0}
              quality={90}
              className={`object-cover object-center transition-transform duration-[4000ms] ${ index === currentImage ? 'scale-105' : 'scale-100'}`}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/35"></div>
          </div>
        ))}
      </div>

      {/* Contenu textuel */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl md:text-5xl font-light text-white mb-6 logo_">
            Votre confort est notre <span className="font-serif italic text-amber-400">Priorité</span>
          </h1>
          
          <div className="w-16 h-px bg-amber-600 mx-auto my-6"></div>
          
          <p className="text-white/90 font-light mb-8 text-lg">
            Un sanctuaire urbain où le design épuré rencontre un service impeccable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/chambres"
              className="px-6 py-3 bg-white text-gray-900 text-sm uppercase tracking-wider hover:bg-white/90 transition-colors"
            >
              Explorer nos chambres
            </Link>
            <Link
              href="/reservation"
              className="px-6 py-3 border border-white text-white text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Réserver
            </Link>
          </div>
        </div>
      </div>

      {/* Bullets de navigation */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentImage(index);
              }}
              aria-label={`Aller à l'image ${index + 1}`}
              aria-current={index === currentImage ? "true" : "false"}
              className={`h-2 rounded-full transition-all ${ index === currentImage 
                  ? 'w-6 bg-white' 
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
