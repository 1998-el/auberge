import Image from 'next/image';

const SimpleBanner = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <section className="relative h-96 bg-gray-100">
      <Image
        src="/hotel/room_(3).jpg"
        alt="room"
        fill
        
        className="object-cover w-full"
      />
      <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
        <div className="container px-4">
          <h1 className="text-4xl md:text-5xl logo_ font-bold mb-4 text-amber-500">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SimpleBanner;