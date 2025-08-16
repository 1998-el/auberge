import Link from 'next/link';

const PromoBanner = () => {
  return (
    <section className="bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-2">
              Offre Spéciale Été
            </h2>
            <p className="text-gray-600 mb-4">
              Profitez de -20% sur tous nos séjours réservés avant le 31 août.
              Code promo : <span className="font-bold">ETE2023</span>
            </p>
            <Link
              href="/offres-speciales"
              className="inline-block text-amber-600 hover:text-amber-700 font-medium underline"
            >
              Voir les conditions
            </Link>
          </div>
          <Link
            href="/reservation"
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full whitespace-nowrap transition-colors duration-300"
          >
            Réserver Maintenant
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;