import Image from 'next/image';
import HeroBanner from './components/banners/HeroBanner';
import ImageTextSection from './components/sections/ImageTextSection';
import CtaBanner from './components/banners/CtaBanner';
import ScrollMotion from './components/motion/ScrollMotion';
import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="bg-white rounded-2xl shadow-md p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">⚠️ Oups !</h2>
          <p className="text-gray-700 mb-6">
            Le site est momentanément indisponible.<br />
            Veuillez nous excuser pour la gêne occasionnée.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="mailto:pmounkam8@gmail.com"
              className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
            >
              Contacter le support
            </Link>

          
          </div>
        </div>
      </div>

      {/* <HeroBanner />

      <div>
        <ScrollMotion>
          <section className="container mx-auto px-4 text-center flex flex-col justify-center items-center  space-y-8 py-16">
            <div className="hidden md:flex items-center ">
              <Image src="/logo/logo.png" alt="logo" width={100} height={80} priority />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold logo_ text-gray-900 ">
              Bienvenue au <span className="text-amber-600">Manhattan Motel</span>
            </h2>

            <div className="mt-4 max-w-2xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed">
                Découvrez un cadre moderne, sûr et chaleureux au cœur de la ville.
                Nos chambres et suites élégantes vous offrent tout le confort dont
                vous avez besoin, avec une sécurité renforcée grâce à la
                vidéosurveillance et la présence permanente d’un gardien.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-12 lg:px-8 md:px-2">
              {[
                { src: '/images/gardien.jpg', alt: 'Chambre moderne' },
                { src: '/images/img_4.jpg', alt: 'Restaurant élégant' },
                { src: '/images/img_13.jpg', alt: 'Accueil chaleureux' },
                { src: '/images/bar.jpg', alt: 'Chambre moderne' },
                { src: '/images/img_8.jpg', alt: 'Restaurant élégant' },
                { src: '/images/img_1.jpg', alt: 'Accueil chaleureux' },
              ].map((img, i) => (
                <div key={i} className="overflow-hidden rounded-sm ">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </section>
        </ScrollMotion>

        <section className="my-8 bg-gray-50 py-12">
          <div className="space-y-16">
            <ScrollMotion delay={0.1}>
              <ImageTextSection
                imageSrc="https://i.pinimg.com/736x/13/84/32/1384328f75c54b741957546ffc8539e6.jpg"
                imageAlt="Chambre d'hôtel luxueuse et moderne"
                title="Votre tranquillité, notre priorité"
                description="Nos suites exclusives allient confort et élégance au cœur de la ville. Chaque espace a été pensé pour votre bien-être, avec un service discret et attentif disponible 24h/24."
                imagePosition="right"
                linkHref="/chambres"
                linkText="Découvrir nos suites"
              />
            </ScrollMotion>

            <ScrollMotion delay={0.2}>
              <ImageTextSection
                imageSrc="/images/gardien.jpg"
                imageAlt="Système de vidéosurveillance et gardiennage"
                title="Sécurité assurée 24h/24"
                description="Dormez l’esprit léger : notre établissement est équipé d’un système de vidéosurveillance moderne et d’un gardien présent en permanence."
                imagePosition="left"
                linkHref="/services"
                linkText="Nos prestations"
              />
            </ScrollMotion>

          

            <ScrollMotion delay={0.4}>
              <ImageTextSection
                imageSrc="/images/img_1.jpg"
                imageAlt="Groupe électrogène de secours moderne"
                title="Énergie garantie en toute circonstance"
                description="Avec notre groupe électrogène de secours, profitez d’un confort ininterrompu, même en cas de coupure électrique."
                imagePosition="right"
                linkHref="/galerie"
                linkText="Visite virtuelle"
              />
            </ScrollMotion>

            <ScrollMotion delay={0.5}>
              <ImageTextSection
                imageSrc="/images/eau_.png"
                imageAlt="Réservoir d’eau pour approvisionnement continu"
                title="Approvisionnement continu en eau"
                description="Un système de réserve moderne vous garantit un accès permanent à l’eau, même lors des interruptions du réseau."
                imagePosition="left"
                linkHref="/galerie"
                linkText="Visite virtuelle"
              />
            </ScrollMotion>
          </div>
        </section>

        <ScrollMotion delay={0.6}>
          <section className="bg-[#001b39] py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
                  Wi-Fi Haut Débit 24/7
                </h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                  Connectivité Starlink - Internet rapide et fiable partout dans
                  l’établissement
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Vitesse Exceptionnelle',
                    description:
                      'Jusqu’à 200 Mbps en download et 50 Mbps en upload grâce à notre antenne Starlink',
                    iconColor: 'bg-blue-100 text-blue-600',
                    svgPath: 'M13 10V3L4 14h7v7l9-11h-7z',
                  },
                  {
                    title: 'Disponibilité 24/24',
                    description:
                      'Internet disponible en permanence, même pendant les coupures de courant locales',
                    iconColor: 'bg-green-100 text-green-600',
                    svgPath:
                      'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                  },
                  {
                    title: 'Multi-appareils',
                    description:
                      'Connectez jusqu’à 200 appareils simultanément sans perte de performance',
                    iconColor: 'bg-purple-100 text-purple-600',
                    svgPath: 'M17 20h5v-2a3 3 0...',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-lg p-6 text-center"
                  >
                    <div
                      className={`w-12 h-12 ${item.iconColor} rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={item.svgPath}
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollMotion>

        <ScrollMotion delay={0.7}>
          <section className="container  h-[100vh] flex flex-col justify-center items-center mx-auto px-4 py-16 text-center bg-amber-600/5" id='contact'>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contactez-nous
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Pour toute question ou réservation, appelez-nous. Nous acceptons
              également les paiements via{' '}
              <span className="font-semibold">Mobile Money</span> et{' '}
              <span className="font-semibold">Orange Money</span>.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              {[
                { number: '+237 659 407 948', label: 'Mobile Money' },
                { number: '+237 672 489 289', label: 'Orange Money' },
              ].map((contact, i) => (
                <div key={i} className="flex items-center text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1..."
                    />
                  </svg>
                  <span className="text-lg font-medium">
                    {contact.number} ({contact.label})
                  </span>
                </div>
              ))}
            </div>
          </section>
        </ScrollMotion>

        <CtaBanner
          title="Prêt pour une expérience inoubliable ?"
          subtitle="Réservez dès maintenant votre séjour exclusif"
          buttonText="Réserver maintenant"
          buttonHref="/reservation"
          backgroundImage="https://i.pinimg.com/736x/93/30/23/933023fac9c4c3ae6791082386fd8fe8.jpg"
        />
      </div> */}
    </main>
  );
}
