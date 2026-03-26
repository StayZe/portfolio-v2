"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function PassionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // On suit le scroll sur toute la hauteur de la section (500vh pour plus d'espace)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Un ressort global pour lisser le scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    mass: 0.5,
  });

  // 1. Agrandissement initial (se fait sur les 10 premiers % du scroll)
  // On s'arrête à 100% de l'écran MOINS le padding de 2rem (p-4 = 1rem * 2)
  // 1. Agrandissement initial
  // On utilise la même structure "calc(...)" pour que Framer Motion puisse interpoler les chiffres
  const width = useTransform(
    smoothProgress,
    [0, 0.1],
    ["calc(80vw - 0rem)", "calc(100vw - 2rem)"],
  );
  const height = useTransform(
    smoothProgress,
    [0, 0.1],
    ["calc(45vw - 0rem)", "calc(100vh - 2rem)"],
  );

  // L'arrondi fonctionne car les deux valeurs sont en "px"
  const borderRadius = useTransform(smoothProgress, [0, 0.1], ["24px", "16px"]);

  // 2. Animations de superposition (Stacking Cards effect)

  // VIDÉO 1 (Automobile)
  const scale1 = useTransform(smoothProgress, [0.25, 0.4], [1, 0.85]);
  const opacity1 = useTransform(smoothProgress, [0.35, 0.4], [1, 0]);

  // VIDÉO 2 (Video Games)
  const y2 = useTransform(smoothProgress, [0.25, 0.4], ["100%", "0%"]);
  const scale2 = useTransform(smoothProgress, [0.65, 0.8], [1, 0.85]);
  const opacity2 = useTransform(smoothProgress, [0.75, 0.8], [1, 0]);

  // VIDÉO 3 (Tokyo)
  const y3 = useTransform(smoothProgress, [0.65, 0.8], ["100%", "0%"]);

  return (
    <section
      ref={containerRef}
      id="passions"
      // Hauteur augmentée à 500vh pour laisser de larges zones de pause
      className="relative w-full h-[500vh] bg-background text-foreground"
    >
      {/* Ton H2 fixe au-dessus */}
      <div className="w-full text-center pt-16 absolute top-0 z-10 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-tan tracking-tight mb-6 drop-shadow-2xl">
          Mes <span className="text-primary italic">Passions</span>
        </h2>
      </div>

      {/* On ajoute le p-4 ici pour créer le cadre tout autour */}
      <div className="sticky top-0 w-full h-screen p-4 flex items-center justify-center overflow-hidden">
        {/* Animated Expanding Container */}
        <motion.div
          style={{ width, height, borderRadius }}
          className="relative bg-background overflow-hidden shadow-2xl ring-1 ring-foreground/10"
        >
          {/* Slide 1 : Automobile */}
          <motion.div
            style={{ scale: scale1, opacity: opacity1 }}
            className="absolute inset-0 w-full h-full origin-top"
          >
            <video
              src="/videos/car.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            {/* Overlay dégradé pour faire ressortir le texte, fondu avec le fond du site */}
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />

            <div className="absolute bottom-12 left-8 md:bottom-16 md:left-16">
              <span className="text-primary font-sans font-bold text-sm md:text-base uppercase tracking-[0.2em] mb-3 block drop-shadow-md">
                {`// 1`}
              </span>
              <h3 className="text-5xl md:text-7xl font-tan text-foreground leading-none drop-shadow-lg">
                Automobile
              </h3>
            </div>
          </motion.div>

          {/* Slide 2 : Video Games */}
          <motion.div
            style={{ y: y2, scale: scale2, opacity: opacity2 }}
            className="absolute inset-0 w-full h-full origin-top border-t border-foreground/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
          >
            <video
              src="/videos/arcade.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />

            <div className="absolute bottom-12 left-8 md:bottom-16 md:left-16">
              <span className="text-primary font-sans font-bold text-sm md:text-base uppercase tracking-[0.2em] mb-3 block drop-shadow-md">
                {`// 2`}
              </span>
              <h3 className="text-5xl md:text-7xl font-tan text-foreground leading-none drop-shadow-lg">
                Jeux vidéos
              </h3>
            </div>
          </motion.div>

          {/* Slide 3 : Tokyo - Japon */}
          <motion.div
            style={{ y: y3 }}
            className="absolute inset-0 w-full h-full origin-top border-t border-foreground/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
          >
            <video
              src="/videos/tokyo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />

            <div className="absolute bottom-12 left-8 md:bottom-16 md:left-16">
              <span className="text-primary font-sans font-bold text-sm md:text-base uppercase tracking-[0.2em] mb-3 block drop-shadow-md">
                {`// 3`}
              </span>
              <h3 className="text-5xl md:text-7xl font-tan text-foreground leading-none drop-shadow-lg">
                Tokyo - Japon
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
