export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600">
          Abonnement expiré
        </h1>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Votre abonnement a expiré.
          <br />
          Veuillez contacter votre administrateur afin de le renouveler.
        </p>

        <p className="mt-4 text-sm text-gray-500 italic">
          Note : L'accès à cette application est temporairement suspendu jusqu'au renouvellement de l'abonnement.
        </p>
      </div>
    </main>
  );
}          <section className="bg-[#001b39] py-20">
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
      </div> 
    </main>
  );
}
