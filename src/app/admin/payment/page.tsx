import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paiement | Manhattan Motel - Espace Admin",
  description: "Paiement des frais d'hebergement",
};

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white  overflow-hidden">
        {/* Header avec logo */}
        <div className="bg-red-600 p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">
            Offre d'hebergement gratuit expiree
          </h1>
        </div>

        {/* Corps du message */}
        <div className="p-8 text-center">
          <div className="mb-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Votre offre d'hebergement gratuit a expire le{" "}
              <span className="font-bold text-red-600">14/03/2026</span>
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-gray-600 mb-4">
              Veuillez vous connecter a votre espace admin afin de vous
              acquitter des frais d'hebergement
            </p>
            <div className="text-4xl font-bold text-gray-900">7.97 $</div>
            <p className="text-gray-500 text-sm mt-2">USD</p>
          </div>

          <p className="text-gray-600 mb-8">
            afin de continuer a utiliser nos services.
          </p>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-8 py-4 text-center">
          <p className="text-gray-500 text-xs">
            © 2025 Manhattan Motel. Tous droits reserves.
          </p>
        </div>
      </div>
    </div>
  );
}
