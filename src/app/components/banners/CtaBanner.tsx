import Image from 'next/image';
import Link from 'next/link';

interface CtaBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage?: string;
}

const CtaBanner = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonHref, 
  backgroundImage 
}: CtaBannerProps) => {
  return (
    <div className="relative">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-sm transition-colors duration-300"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CtaBanner;