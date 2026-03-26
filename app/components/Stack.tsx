"use client";

import { useEffect, useRef, useState } from "react";
import {
  SiNextdotjs,
  SiPayloadcms,
  SiWordpress,
  SiElementor,
  SiOxygen,
  SiBricks,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiSymfony,
  SiGit,
  SiGithub,
  SiGitlab,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

// 1. On ajoute des descriptions courtes et impactantes
export const STACK_ITEMS = [
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "#FFFFFF",
    desc: "Architecture React moderne pour le Web.",
  },
  {
    icon: SiPayloadcms,
    name: "Payload",
    color: "#FFFFFF",
    desc: "CMS Headless flexible via TypeScript. Surcouche de Next.js",
  },
  {
    icon: SiWordpress,
    name: "WordPress",
    color: "#00749C",
    desc: "Création et gestion de blog / contenu sur-mesure.",
  },
  {
    icon: SiElementor,
    name: "Elementor",
    color: "#92003B",
    desc: "Construction visuelle sans limites pour Wordpress.",
  },
  {
    icon: SiOxygen,
    name: "Oxygen",
    color: "#FFFFFF",
    desc: "Développement visuel ultra-performant, concurrent de Elementor.",
  },
  {
    icon: SiBricks,
    name: "Bricks",
    color: "#FFCC00",
    desc: "Développement visuel pour Wordpress très optimisé et complet.",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
    color: "#339933",
    desc: "Environnement d'exécution backend asynchrone pour applications JS/TS.",
  },
  {
    icon: "ALTCHA",
    name: "Altcha",
    color: "#FFFFFF",
    desc: "Protection anti-spam éthique et RGPD. Alternative à hCaptcha et Google reCAPTCHA.",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
    desc: "Sécurité et robustesse via typage statique.",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
    desc: "Logique métier et interactions dynamiques.",
  },
  {
    icon: SiPhp,
    name: "PHP",
    color: "#777BB4",
    desc: "Langage serveur robuste et éprouvé.",
  },
  {
    icon: SiSymfony,
    name: "Symfony",
    color: "#FFFFFF",
    desc: "Framework backend structuré pour l'entreprise.",
  },
  {
    icon: SiGit,
    name: "Git",
    color: "#F05032",
    desc: "Gestion de versions et travail collaboratif.",
  },
  {
    icon: SiGithub,
    name: "GitHub",
    color: "#FFFFFF",
    desc: "Hébergement et intégration continue.",
  },
  {
    icon: SiGitlab,
    name: "GitLab",
    color: "#FC6D26",
    desc: "Ecosystème DevOps et pipelines CI/CD.",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
    color: "#06B6D4",
    desc: "Architecture CSS utilitaire et design system.",
  },
];

export function StackSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // État pour savoir quelle technologie on survole
  const [hoveredItem, setHoveredItem] = useState<
    (typeof STACK_ITEMS)[0] | null
  >(null);

  // Valeurs de mouvement pour suivre la souris
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // On applique un léger ressort pour que la modale glisse élégamment (et ne soit pas saccadée)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  // Mise à jour de la position de la souris
  const handleMouseMove = (e: React.MouseEvent) => {
    // On décale de +20px pour que la modale ne passe pas sous la souris
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY + 20);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stack"
      // On écoute le mouvement de la souris sur toute la section
      onMouseMove={handleMouseMove}
      className="w-full py-32 bg-background flex flex-col items-center overflow-hidden relative cursor-default"
    >
      <div className="max-w-7xl w-full px-6 md:px-12 text-center" ref={ref}>
        {/* En-tête de la section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-tan tracking-tight text-foreground mb-6">
            Ma <span className="text-primary italic">stack</span> technique
          </h2>
          <Image
            src="/svg/wave.svg"
            alt="Wave decoration"
            width={100}
            height={100}
            className="w-10 h-auto mx-auto mb-6"
          />
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-sans">
            Les outils que j&apos;utilise au quotidien pour concevoir et
            développer des applications web performantes.
          </p>
        </motion.div>

        {/* Grille des technos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-16 gap-x-6">
          {STACK_ITEMS.map((item, index) => {
            const delayStyle = isVisible
              ? { transitionDelay: `${index * 60}ms` }
              : {};

            const baseClass =
              "group flex flex-col items-center gap-6 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]";
            const visibleClass = isVisible
              ? "opacity-40 translate-y-0 hover:opacity-100"
              : "opacity-0 translate-y-10";

            return (
              <div
                key={item.name}
                className={`${baseClass} ${visibleClass}`}
                style={delayStyle}
                // On met à jour l'élément survolé ici !
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Conteneur de l'icône */}
                <div
                  className="h-16 w-16 flex items-center justify-center transition-all duration-500 text-foreground group-hover:drop-shadow-lg"
                  onMouseEnter={(e) => {
                    if (item.color) {
                      e.currentTarget.style.color = item.color;
                      e.currentTarget.style.filter = `drop-shadow(0 0 12px ${item.color}40)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--foreground)";
                    e.currentTarget.style.filter = "none";
                  }}
                >
                  {item.icon === "ALTCHA" ? (
                    <span className="font-tan text-[40px] md:text-[50px] leading-none">
                      A
                    </span>
                  ) : (
                    <item.icon className="w-full h-full" color="currentColor" />
                  )}
                </div>

                {/* Nom de la technologie */}
                <span className="font-sans uppercase tracking-[0.15em] text-xs font-bold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODALE QUI SUIT LA SOURIS */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            // On s'assure qu'elle ne bloque pas les interactions (pointer-events-none)
            className="fixed top-0 left-0 z-100 pointer-events-none w-64 bg-background/95 backdrop-blur-md border border-foreground/10 p-5 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-foreground/50 font-sans font-bold text-[10px] uppercase tracking-[0.2em]">
                {`// ${hoveredItem.name}`}
              </span>
            </div>

            {/* Le nom prend la couleur native de l'outil pour un effet premium */}
            <h4
              className="font-tan text-2xl mb-2 leading-none"
              style={{ color: hoveredItem.color }}
            >
              {hoveredItem.name}
            </h4>

            <p className="font-sans text-sm text-foreground/70 leading-relaxed font-medium">
              {hoveredItem.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
