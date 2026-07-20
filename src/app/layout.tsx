import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manhattan Motel | Séjour Confortable & Abordable",
  description:
    "Profitez d'un séjour incroyable au Manhattan Motel. Chambres confortables, services de qualité et un accueil chaleureux pour rendre votre expérience inoubliable.",
  keywords: [
    "Manhattan Motel",
    "hôtel",
    "séjour",
    "hébergement",
    "chambres",
    "services",
  ],
  openGraph: {
    title: "Manhattan Motel | Séjour Confortable & Abordable",
    description:
      "Découvrez le Manhattan Motel : confort, services modernes et accueil chaleureux.",
    url: "https://manhattanmotel.com",
    siteName: "Manhattan Motel",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manhattan Motel | Séjour Confortable & Abordable",
    description:
      "Profitez d'un séjour incroyable au Manhattan Motel. Confort et services inclus.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-sans text-gray-700 bg-white antialiased">
        <header></header>
        {/* <main className="min-h-screen">{children}</main> */}
        <h1 className="text-red-600 ">erreur avec votre offre d'hebergement!</h1>
        <footer></footer>
      </body>
    </html>
  );
}
