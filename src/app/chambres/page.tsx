import SimpleBanner from '../components/banners/SimpleBanner';
import RoomCard from '../components/rooms/RoomCard';
import Link from 'next/link';

export default function ChambresPage() {
  return (
    <main>
      <SimpleBanner
        title="Nos Chambres & Cases"
        subtitle="Authenticité et convivialité dans un cadre chaleureux"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-800 mb-12">
            Découvrez nos hébergements typiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RoomCard
              imageSrc="/images/img_13.jpg"
              imageAlt="Chambre Simple"
              title="Chambre Standar"
              description="Chambre authentique avec lit double, ventilateur et salle d'eau privative. Décoration locale et ambiance chaleureuse."
              linkHref="/chambres/traditionnelle"
            />
            <RoomCard
              imageSrc="/images/img_11.jpg"
              imageAlt="Chambre Double"
              title="Chambre Confort"
              description="Espace spacieux avec deux lits, climatisation, terrasse privée et vue sur la végétation. Parfaite pour les familles."
              linkHref="/chambres/confort"
            />
            <RoomCard
              imageSrc="/images/img_14.jpg"
              imageAlt="Suite"
              title="Chambre VIP"
              description="Grand espace avec salon intégré, climatisation, décoration haut de gamme et accès piscine. Petit-déjeuner inclus."
              linkHref="/chambres/vip"
            />
            {/* <RoomCard
              imageSrc="/hotel/room_(6).jpg"
              imageAlt="Dortoir"
              title="Dortoir Communautaire"
              description="Solution économique avec lits superposés (4-6 places), idéal pour groupes et routards. Salle de bain partagée."
              linkHref="/chambres/dortoir"
            /> */}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
            Envie d&apos;une escapade authentique ?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Notre auberge vous propose des formules adaptées à tous les besoins, avec des services personnalisés pour rendre votre séjour inoubliable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-medium text-amber-800">Séjour Personnalisé</h3>
              <p className="text-sm text-gray-600">Adapté à vos préférences</p>
              <p className="text-gray-700">Services sur mesure</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800">Expérience Complète</h3>
              <p className="text-sm text-gray-600">Tout inclus</p>
              <p className="text-gray-700">Activités et repas inclus</p>
            </div>
          </div>
          <Link
            href="/reservation"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            Réserver Maintenant
          </Link>
        </div>
      </section>
    </main>
  );
}
