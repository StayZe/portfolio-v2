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
    "Sedan",
    "Reims",
    "Charleville-Mézières",
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.antoinemandra.fr/#person",
                  name: "Antoine Mandra",
                  jobTitle: "Développeur Web Fullstack",
                  description:
                    "Développeur Web expert Next.js, PayloadCMS et WordPress. Création d'applications SaaS et sites vitrines ultra-performants.",
                  url: "https://www.antoinemandra.fr/",
                  email: "mandra.antoine@gmail.com",
                  telephone: "+33620600952",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Sedan",
                    postalCode: "08200",
                    addressCountry: "FR",
                  },
                  sameAs: [
                    "https://www.linkedin.com/in/antoine-mandra-401147240/",
                    "https://github.com/StayZe", // Ajoute ton lien GitHub ici
                  ],
                  knowsAbout: [
                    "Next.js",
                    "WordPress",
                    "PayloadCMS",
                    "TypeScript",
                    "SaaS Development",
                    "Web Performance Optimization",
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "Comsea",
                    url: "https://comsea.fr/",
                  },
                  alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "ESGI Reims",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Reims",
                      postalCode: "51100",
                      addressCountry: "FR",
                    },
                  },
                },
                {
                  "@type": "Service",
                  serviceType: "Développement Web",
                  provider: { "@id": "https://www.antoinemandra.fr/#person" },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Services de développement Antoine Mandra",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Création de site vitrine",
                          description:
                            "Conception de sites vitrines modernes avec WordPress ou Next.js.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Développement d'application SaaS",
                          description:
                            "Architecture complète d'applications SaaS scalables avec Next.js et PayloadCMS.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Audit de performance Web",
                          description:
                            "Optimisation Core Web Vitals et accélération du temps de chargement.",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="flex flex-col relative">
        <SmoothScroll>
          <Header />
          <main className="relative flex-1">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
