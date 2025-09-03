import Link from 'next/link';
import Image from 'next/image';

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/+237691528015" // Remplacez par votre numéro WhatsApp réel
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-md transition-all duration-200 hover:shadow-lg z-50 group"
      aria-label="Réserver via WhatsApp"
    >
      <div className="relative w-8 h-8">
        <Image 
          src="/assets/whp.png" 
          alt="WhatsApp" 
          fill
          className="object-contain"
        />
      </div>
      <span className="absolute right-[calc(100%+12px)] whitespace-nowrap bg-gray-800 text-white text-sm font-medium px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
        Réserver
        <span className="absolute top-1/2 right-0 w-2 h-2 bg-gray-800 transform translate-x-1/2 -translate-y-1/2 rotate-45"></span>
      </span>
    </Link>
  );
};

export default WhatsAppButton;
