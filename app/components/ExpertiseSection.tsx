"use client";
import { motion } from "framer-motion";

const expertises = [
  {
    id: "01",
    title: "Développement Sur-Mesure",
    description:
      "Création d'applications web ultra-performantes, scalables et robustes. Une architecture moderne pensée pour la vitesse, la fiabilité et l'évolutivité à long terme.",
    tools: ["Next.js", "PayloadCMS", "TypeScript", "PostgreSQL", "MinIO"],
  },
  {
    id: "02",
    title: "Écosystème WordPress",
    description:
      "Conception de sites vitrines et plateformes complexes sous WordPress. Une approche modulaire offrant une flexibilité totale et une gestion de contenu intuitive sans compromettre les performances.",
    tools: ["Elementor Avancé", "ACF (SCF)", "Unlimited Elements"],
  },
  {
    id: "03",
    title: "Performance, SEO & Sécurité",
    description:
      "Optimisation technique poussée pour les moteurs de recherche (SEO-friendly) et intégration de solutions de sécurité modernes et respectueuses de la vie privée (RGPD).",
    tools: [
      "TheSeoFramework",
      "SQLite Object Storage",
      "Altcha (No-ReCaptcha)",
    ],
  },
];

export function ExpertiseSection() {
  return (
    <section
      id="expertises"
      className="w-full py-32 bg-background text-foreground relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* En-tête de la section */}
        <div className="mb-24 md:flex md:justify-between md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-tan tracking-tight text-foreground mb-6 leading-none">
              Mon <span className="text-primary italic">expertise</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-md mt-6 md:mt-0"
          >
            <p className="text-foreground/60 text-lg font-sans leading-relaxed">
              Des solutions techniques de pointe, de l&apos;architecture serveur
              jusqu&apos;à l&apos;interface utilisateur, pour des projets web
              ambitieux.
            </p>
          </motion.div>
        </div>

        {/* Liste des Expertises */}
        <div className="flex flex-col border-b border-foreground/20">
          {expertises.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="group relative flex flex-col lg:flex-row items-start lg:items-center justify-between py-12 lg:py-16 border-t border-foreground/20 transition-colors duration-500 hover:bg-foreground/2"
            >
              {/* Numéro & Titre */}
              <div className="w-full lg:w-1/2 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-8 lg:mb-0">
                <span className="text-primary font-sans font-bold text-sm md:text-base uppercase tracking-[0.2em]">
                  {`// ${item.id}`}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-tan text-foreground transition-colors duration-500 group-hover:text-primary">
                  {item.title}
                </h3>
              </div>

              {/* Description & Outils */}
              <div className="w-full lg:w-1/2 lg:pl-16 flex flex-col gap-8">
                <p className="text-foreground/70 font-sans text-lg md:text-xl leading-relaxed">
                  {item.description}
                </p>

                {/* Tags des technos */}
                <div className="flex flex-wrap gap-3">
                  {item.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-xs font-sans uppercase tracking-widest font-bold border border-foreground/20 text-foreground/80 bg-transparent transition-all duration-300 group-hover:border-primary/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
