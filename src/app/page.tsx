import HeroBanner from './components/banners/HeroBanner';
import ImageTextSection from './components/sections/ImageTextSection';
import CtaBanner from './components/banners/CtaBanner';

export default function Home() {
  return (
    <main className="bg-white">
      <HeroBanner />
      
      <div className="space-y-16 md:space-y-24 lg:space-y-32 py-16 md:py-24 lg:py-32">
        <ImageTextSection
          imageSrc="/hotel/room_(5).jpg"
          imageAlt="Chambre d'hôtel luxueuse"
          title="Votre tranquillité, notre priorité"
          description="Nos suites exclusives offrent un havre de paix au cœur de la ville. Conçues par des architectes d'intérieur renommés, chaque détail a été pensé pour votre bien-être. Profitez d'une atmosphère sécurisée avec surveillance 24h/24 et d'un service discret mais toujours disponible."
          imagePosition="right"
          linkHref="/chambres"
          linkText="Découvrir nos suites"
        />

        <ImageTextSection
          imageSrc="/assets/surveillance.jpg"
          imageAlt="Hall d'entrée élégant"
          title="L'excellence d'un service sur mesure"
          description="Dans notre auberge familiale, chaque chambre est un havre de tranquillité. Avec notre système de vidéosurveillance discret et notre environnement calme, dormez l'esprit léger. Toutes nos chambres sont équipées de coffres-forts personnels pour vos objets de valeur."
          imagePosition="left"
          linkHref="/services"
          linkText="Nos prestations"
        />
 
        <ImageTextSection
          imageSrc="/hotel/surveillance.jpg"
          imageAlt="Parking hautement sécurisé"
          title="Parking hautement sécurisé"
          description= "Votre véhicule en sécurité totale avec notre système de surveillance 24/7, contrôle d'accès biométrique et patrouilles régulières. Espaces couverts disponibles sur réservation."
          imagePosition="right"
          linkHref="/galerie"
          linkText="Visite virtuelle"
        />

        <CtaBanner
          title="Prêt pour une expérience inoubliable ?"
          subtitle="Réservez dès maintenant votre séjour exclusif"
          buttonText="Réserver maintenant"
          buttonHref="/reservation"
          backgroundImage="/hotel/room_(5).jpg"
        />
      </div>
    </main>
  );
}