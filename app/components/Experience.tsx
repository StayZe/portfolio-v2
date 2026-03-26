"use client";
import { motion } from "framer-motion";
import { Briefcase, Database, Video } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    role: "Développeur Web Fullstack",
    company: "Comsea",
    location: "Charleville-Mézières",
    date: "Octobre 2024 - Aujourd'hui",
    icon: <Briefcase className="w-5 h-5 text-primary" />,
    description: [
      "Développement Full Stack : Création d'apps sur-mesure en React/Next.js (Front) et Symfony/PHP (Back). Intégration de PayloadCMS pour des architectures flexibles.",
      "Expertise WordPress : Création, refonte, optimisation drastique des performances (Core Web Vitals) et transfert de compétences aux clients.",
      "DevOps & Infrastructure : Configuration de VPS, automatisation des backups, gestion d'hébergement (OVH, Ionos, Vercel) et CI/CD via Git.",
    ],
    skills: [
      "Next.js",
      "React",
      "Symfony",
      "PHP",
      "WordPress",
      "PayloadCMS",
      "VPS",
      "Git",
    ],
  },
  {
    id: 2,
    role: "Réalisateur Streaming",
    company: "DVCR",
    location: "Sedan CSSA 08",
    date: "Octobre 2024 - Aujourd'hui",
    icon: <Video className="w-5 h-5 text-primary" />,
    description: [
      "Réalisation et diffusion en direct de matchs de football.",
      "Gestion technique complète : Création de scènes sous OBS/vMix, gestion du live, changement de caméras et transitions.",
      "Hardware : Coordination software/hardware et configuration de périphériques (MIDI, Stream Deck).",
    ],
    skills: ["OBS", "vMix", "Stream Deck", "Régie Vidéo", "Live Streaming"],
  },
  {
    id: 3,
    role: "Gestion de Données",
    company: "Aldem",
    location: "Vrigne-aux-Bois",
    date: "Juillet 2024 - Août 2024",
    icon: <Database className="w-5 h-5 text-primary" />,
    description: [
      "Transition numérique : Migration de l'intégralité du suivi de réalisation du format papier vers une base de données informatique.",
      "Modernisation : Numérisation des archives physiques pour optimiser l'accessibilité et sécuriser les données de l'entreprise.",
    ],
    skills: ["Saisie de données", "Numérisation", "Archivage numérique"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experiences"
      className="w-full py-32 bg-background text-foreground relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* En-tête de la section */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl md:text-6xl font-tan tracking-tight text-foreground mb-6"
          >
            Mes <span className="text-primary italic">expériences</span>
          </motion.h2>
          <Image
            src="/svg/wave.svg"
            alt="Wave decoration"
            width={100}
            height={100}
            className="w-10 h-auto mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="text-foreground/60 max-w-2xl mx-auto text-lg font-sans"
          >
            Mon parcours professionnel, de la réalisation technique
            d&apos;applications web à la régie vidéo en direct.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-foreground/20 ml-4 md:ml-8 lg:ml-0 lg:border-none">
          {/* Ligne centrale pour Desktop uniquement */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-foreground/20"></div>

          <div className="space-y-16 lg:space-y-32">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className="relative flex flex-col lg:flex-row items-center justify-between group"
                >
                  {/* Icône de la Timeline au centre */}
                  <div className="absolute left-[-24px] lg:left-1/2 transform lg:-translate-x-1/2 flex items-center justify-center w-12 h-12 bg-background border border-foreground/20 rounded-none z-10 transition-colors duration-500 group-hover:border-primary">
                    {exp.icon}
                  </div>

                  {/* Bloc de Contenu */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className={`w-full lg:w-[45%] pl-10 lg:pl-0 ${
                      isEven ? "lg:text-right lg:pr-16" : "lg:ml-auto lg:pl-16"
                    }`}
                  >
                    <div className="flex flex-col h-full justify-center">
                      <div
                        className={`flex flex-col ${isEven ? "lg:items-end" : "lg:items-start"} mb-6`}
                      >
                        <span className="text-primary font-sans font-bold text-xs uppercase tracking-[0.2em] mb-4 inline-block">
                          {exp.date}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-tan text-foreground mb-2 leading-none">
                          {exp.role}
                        </h3>
                        <p className="text-foreground/50 font-sans uppercase tracking-widest text-sm font-bold mt-2">
                          {exp.company}{" "}
                          <span className="text-primary mx-1">•</span>{" "}
                          {exp.location}
                        </p>
                      </div>

                      <ul
                        className={`mb-8 space-y-3 text-foreground/70 font-sans text-base md:text-lg ${isEven ? "lg:text-right" : "text-left"}`}
                      >
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="leading-relaxed flex lg:block items-start"
                          >
                            {/* Tiret visible sur mobile, masqué ou intégré différemment sur desktop */}
                            <span className="lg:hidden mr-3 mt-1 text-primary text-sm">
                              ■
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Badges de Compétences faàon "Tags" éditoriaux */}
                      <div
                        className={`flex flex-wrap gap-2 ${isEven ? "lg:justify-end" : "justify-start"}`}
                      >
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-sans uppercase tracking-wider font-semibold border border-foreground/20 text-foreground/70 bg-transparent transition-colors hover:border-primary hover:text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
