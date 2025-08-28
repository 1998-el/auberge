'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Images optimisées pour le web (format .webp recommandé)
  const images = [
    { src: '/images/img_1.jpg', alt: 'Chambre d\'hôtel luxueuse' },
    { src: '/images/img_2.jpg', alt: 'Hall d\'entrée élégant' },
    { src: '/images/img_3.jpg', alt: 'Piscine panoramique' },
     { src: '/images/img_4.jpg', alt: 'Chambre d\'hôtel luxueuse' },
    { src: '/images/img_5.jpg', alt: 'Hall d\'entrée élégant' },
    { src: '/images/img_6.jpg', alt: 'Piscine panoramique' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); 
    }, 8000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen overflow-hidden ">
      {/* Conteneur d'images avec optimisation Next.js */}
      <div className=" inset-0 -z-1">
        {images.map((img, index) => (
          <div 
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out  ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            } ${isTransitioning ? 'transitioning' : ''}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={index === 0}
              quality={90}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/35"></div>
          </div>
        ))}
      </div>

      {/* Contenu textuel centré */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
           Votre confort  est notre <span className="font-serif italic text-amber-400">Priorite</span>
          </h1>
          
          <div className="w-16 h-px bg-white/50 mx-auto my-6"></div>
          
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

      {/* Contrôles de navigation discrets */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentImage(index);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentImage ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Afficher l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;