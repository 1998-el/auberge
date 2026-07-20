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
          Note : L&apos;accès à cette application est temporairement suspendu jusqu&apos;au renouvellement de l&apos;abonnement.
        </p>
      </div>
    </main>
  );
}
