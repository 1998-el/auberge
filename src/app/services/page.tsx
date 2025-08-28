import SimpleBanner from '../components/banners/SimpleBanner';
import ImageTextSection from '../components/sections/ImageTextSection';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main>
      <SimpleBanner
        title="Nos Services Authentiques"
        subtitle="Immersion totale dans l'hospitalité camerounaise"
      />

      <ImageTextSection
        imageSrc="/assets/cuisine_cmr.jpg"
        imageAlt="Restaurant local"
        title="Saveurs Locales"
        description="Dégustez une cuisine maison préparée avec des produits du marché. Nos spécialités incluent le ndolé, le poulet DG, le eru et d'autres plats traditionnels préparés selon les recettes locales. Repas servis dans notre jardin ombragé ou en terrasse."
        imagePosition="right"
        linkHref="/restaurant"
        linkText="Voir le menu"
      />

      <ImageTextSection
        imageSrc="/assets/detente_cmr.jpg"
        imageAlt="Espace détente"
        title="Détente & Convivialité"
        description="Notre espace commun avec hamacs et fauteuils en rotin est idéal pour se reposer. Profitez de notre jardin tropical, de la véranda avec jeux de société et de nos soirées contes autour du feu certains weekends."
        imagePosition="left"
        linkHref="/detente"
        linkText="Découvrir nos activités"
      />

      <ImageTextSection
        imageSrc="/assets/macket_cmr.jpeg"
        imageAlt="Excursions"
        title="Excursions & Découvertes"
        description="Nous organisons des excursions authentiques : visite des marchés artisanaux, randonnées vers les chutes locales, découverte des plantations voisines ou initiation aux danses traditionnelles. Transport et guide inclus."
        imagePosition="right"
        linkHref="/excursions"
        linkText="Voir les excursions"
      />

      <ImageTextSection
        imageSrc="/assets/taxi_cmr.jpg"
        imageAlt="Services pratiques"
        title="Services Pratiques"
        description="Nous proposons : 
        - Location de motos-taxis pour vos déplacements
        - Lessive et repassage express
        - Assistance pour vos réservations locales
        - Change de devises (euros/dollars)
        - Connexion WiFi dans les espaces communs"
        imagePosition="left"
      />

      <section className="py-16 md:py-24 bg-amber-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
            Forfaits Tout Compris
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour découvrir nos forfaits personnalisés adaptés à vos besoins.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            Demander un séjour sur mesure
          </Link>
        </div>
      </section>
    </main>
  );
}
