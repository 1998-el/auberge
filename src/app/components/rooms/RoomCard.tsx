import Image from 'next/image';
import Link from 'next/link';

interface RoomCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkHref: string;
}

const RoomCard = ({ imageSrc, imageAlt, title, description, linkHref }: RoomCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-200">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-sans font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        <Link
          href={linkHref}
          className="inline-flex items-center justify-center w-full sm:w-auto border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm"
        >
          Découvrir cette chambre
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
