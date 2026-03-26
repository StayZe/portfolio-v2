import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/Header";
import { SmoothScroll } from "./components/SmoothScroll";

// 1. Configuration de TAN Memories (Titres)
const tanMemories = localFont({
  src: [
    {
      path: "./fonts/TAN-MEMORIES-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TAN-MEMORIES-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-tan-custom",
  display: "swap",
});

// 2. Configuration d'Helvetica Neue (Texte courant)
const helveticaNeue = localFont({
  src: [
    {
      path: "./fonts/HelveticaNeueLTW0545Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueLTW0555Roman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueLTW0585Heavy.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-custom",
  display: "swap",
});

// --- METADATA SEO & RÉSEAUX SOCIAUX ---
export const metadata: Metadata = {
  // Ton vrai nom de domaine !
  metadataBase: new URL("https://antoinemandra.fr"),

  title: "Antoine Mandra | Développeur Web Fullstack",
  description:
    "Portfolio d'Antoine Mandra, développeur Web Fullstack. Création d'applications web sur-mesure, performantes et scalables avec Next.js, PayloadCMS et WordPress.",
  keywords: [
    "Antoine Mandra",
    "Développeur Web",
    "Fullstack",
    "Next.js",
    "React",
    "PayloadCMS",
    "WordPress",
    "Freelance",
    "Charleville-Mézières", // Localisation très importante pour le SEO local !
  ],
  authors: [{ name: "Antoine Mandra" }],
  creator: "Antoine Mandra",

  // Open Graph (LinkedIn, Facebook, Discord, etc.)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://antoinemandra.fr",
    title: "Antoine Mandra | Développeur Web Fullstack",
    description:
      "Je transforme vos idées en expériences numériques exceptionnelles et innovantes avec Next.js, PayloadCMS et WordPress.",
    siteName: "Antoine Mandra - Portfolio",
    images: [
      {
        url: "/img/logo.png", // Ton logo officiel
        width: 1200,
        height: 630,
        alt: "Logo Antoine Mandra",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Antoine Mandra | Développeur Web Fullstack",
    description:
      "Je transforme vos idées en expériences numériques exceptionnelles et innovantes avec Next.js, PayloadCMS et WordPress.",
    images: ["/img/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // J'ai passé le lang en "fr" pour le SEO français !
    <html
      lang="fr"
      className={`${tanMemories.variable} ${helveticaNeue.variable} antialiased scroll-pt-20 relative`}
    >
      <body className="flex flex-col relative">
        <SmoothScroll>
          <Header />
          <main className="relative flex-1">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
