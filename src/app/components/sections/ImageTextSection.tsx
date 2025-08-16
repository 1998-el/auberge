import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ImageTextSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
  linkHref?: string;
  linkText?: string;
  simple?: boolean;
}

const ImageTextSection = ({
  imageSrc,
  imageAlt,
  title,
  description,
  imagePosition = 'left',
  linkHref,
  linkText,
  simple = false,
}: ImageTextSectionProps) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className={`py-12 md:py-16 ${simple ? 'bg-white' : 'bg-gray-50'}`}>
      <div className={`container mx-auto px-2 ${simple ? 'max-w-5xl' : 'max-w-6xl'}`}>
        <div className={`flex flex-col md:flex-row items-start gap-8 ${simple ? 'md:gap-8' : 'md:gap-12'}`}>
          {/* Image Column */}
          <div className={`w-full md:w-1/2 relative overflow-hidden  ${isImageLeft ? 'order-1' : 'md:order-2'} ${simple ? '' : 'shadow-md'}`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={700}
              height={525}
              className="object-cover w-full h-[532px] "
              priority
            />
            {!simple && (
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
            )}
          </div>

          {/* Text Column */}
          <div className={`w-full md:w-1/2 space-y-4 ${isImageLeft ? 'order-2' : 'md:order-1'}`}>
            <h2 className={`${simple ? 'text-2xl md:text-3xl ' : 'text-3xl md:text-4xl'} font-sans font-bold text-gray-900 tracking-tight mb-4`}>
              {title}
            </h2>
            
            {!simple && (
              <div className="h-0.5 w-20 bg-amber-600 rounded-full"></div>
            )}
            
            <p className={`text-gray-700 ${simple ? 'text-base' : 'text-lg'} leading-relaxed`}>
              {description}
            </p>
            
            {linkHref && linkText && (
              <Link
                href={linkHref}
                className={`inline-flex items-center font-semibold group transition-colors duration-200 ${simple ? 'text-amber-700 hover:text-amber-800' : 'text-amber-600 hover:text-amber-700'}`}
              >
                {linkText}
                <ArrowRight className={`ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 ${simple ? '' : 'h-5 w-5 group-hover:translate-x-2'}`} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;