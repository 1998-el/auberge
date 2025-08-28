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
          imageAlt="Chambre d&apos;hôtel luxueuse"
          title="Votre tranquillité, notre priorité"
          description="Nos suites exclusives offrent un havre de paix au cœur de la ville. Conçues par des architectes d&apos;intérieur renommés, chaque détail a été pensé pour votre bien-être. Profitez d&apos;une atmosphère sécurisée avec surveillance 24h/24 et d&apos;un service discret mais toujours disponible."
          imagePosition="right"
          linkHref="/chambres"
          linkText="Découvrir nos suites"
        />

        <ImageTextSection
          imageSrc="/assets/surveillance.jpg"
          imageAlt="Hall d&apos;entrée élégant"
          title="L&apos;excellence d&apos;un service sur mesure"
          description="Dans notre auberge familiale, chaque chambre est un havre de tranquillité. Avec notre système de vidéosurveillance discret et notre environnement calme, dormez l&apos;esprit léger. Toutes nos chambres sont équipées de coffres-forts personnels pour vos objets de valeur."
          imagePosition="left"
          linkHref="/services"
          linkText="Nos prestations"
        />
 
        <ImageTextSection
          imageSrc="/hotel/surveillance.jpg"
          imageAlt="Parking hautement sécurisé"
          title="Parking hautement sécurisé"
          description= "Votre véhicule en sécurité totale avec notre système de surveillance 24/7, contrôle d&apos;accès biométrique et patrouilles régulières. Espaces couverts disponibles sur réservation."
          imagePosition="right"
          linkHref="/galerie"
          linkText="Visite virtuelle"
        />

        <ImageTextSection
          imageSrc="/images/img_1.jpg"
          imageAlt="Groupe électrogène de secours"
          title="Groupe électrogène de secours"
          description="Continuité assurée en toutes circonstances grâce à notre groupe électrogène de secours. Même en cas de coupure, vos équipements restent alimentés et votre confort préservé."
          imagePosition="left"
          linkHref="/galerie"
          linkText="Visite virtuelle"
        />

        <ImageTextSection
          imageSrc="/images/eau_.jpg"
          imageAlt="Accès continu à l&apos;eau"
          title="Accès continu à l&apos;eau"
          description="Bénéficiez d&apos;un approvisionnement en eau constant, même en cas d&apos;interruption du réseau. Confort et fiabilité assurés à tout moment."
          imagePosition="right"
          linkHref="/galerie"
          linkText="Visite virtuelle"
        />

        {/* Starlink Wi-Fi Section - GitHub Style */}
        <div className="bg-gray-50 border-t border-b border-gray-200 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-mono">
                Wi-Fi Haut Débit 24/7
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Connectivité Starlink - Internet rapide et fiable partout dans l&apos;établissement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Vitesse Exceptionnelle</h3>
                <p className="text-gray-600 text-sm">
                  Jusqu&apos;à 200 Mbps en download et 50 Mbps en upload grâce à notre antenne Starlink
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Disponibilité 24/24</h3>
                <p className="text-gray-600 text-sm">
                  Internet disponible en permanence, même pendant les coupures de courant locales
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Multi-appareils</h3>
                <p className="text-gray-600 text-sm">
                  Connectez jusqu&apos;à 10 appareils simultanément sans perte de performance
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700 font-mono">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Statut: En ligne et opérationnel
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-lg text-gray-700 mb-8">
            Pour toute question ou réservation, n&apos;hésitez pas à nous appeler. Nous acceptons également les paiements via Mobile Money et Orange Money.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xl font-semibold">+237 659 407 948 (Mobile Money)</span>
            </div>
            <div className="flex items-center text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xl font-semibold">+237 672 489 289 (Orange Money)</span>
            </div>
          </div>
        </div>

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
