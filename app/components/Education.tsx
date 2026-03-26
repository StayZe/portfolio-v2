"use client";

import { useEffect, useRef, useState } from "react";

const EDUCATION_ITEMS = [
  {
    title: "ESGI",
    subtitle: "3ème année de Bachelor • Objectif Mastère (Bac+5)",
    date: "Actuellement",
    active: true,
    description:
      "Spécialisation dans le développement Web (Fullstack).\nMon objectif est de concevoir et développer des applications web complexes, performantes et scalables, de l'architecture serveur jusqu'à l'interface utilisateur.",
  },
  {
    title: "Institut Privé Mabillon",
    subtitle: "Collège et Lycée",
    date: "Jusqu'à 2023",
    active: false,
    description:
      "Obtention du Brevet des collèges et du Baccalauréat Général.\nSpécialités : Mathématiques, NSI (Numérique et Sciences Informatiques) et SES (Sciences Économiques et Sociales).",
  },
];

export function EducationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="w-full py-24 bg-background flex flex-col items-center overflow-hidden"
    >
      <div className="max-w-4xl w-full px-6 md:px-12" ref={ref}>
        <h2
          className={`text-4xl md:text-6xl font-tan tracking-tight text-foreground mb-20 text-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Mon <span className="text-primary italic">parcours</span> scolaire
        </h2>

        <div className="relative border-l border-foreground/20 ml-3 md:ml-6 space-y-16">
          {EDUCATION_ITEMS.map((item, index) => {
            const delayStyle = isVisible
              ? { transitionDelay: `${200 + index * 200}ms` }
              : {};
            const visibleClass = isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4";

            return (
              <div
                key={index}
                className={`relative pl-8 md:pl-16 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${visibleClass}`}
                style={delayStyle}
              >
                {/* Timeline Marker - Carré style Griflan */}
                <div
                  className={`absolute -left-[5px] top-2 h-[10px] w-[10px] rotate-45 ${
                    item.active
                      ? "bg-primary shadow-[0_0_15px_rgba(255,66,56,0.4)]"
                      : "bg-foreground/30"
                  }`}
                ></div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-4">
                  <h3 className="text-2xl md:text-4xl font-tan text-foreground leading-none">
                    {item.title}
                  </h3>
                  <span
                    className={`text-xs md:text-sm font-sans uppercase tracking-[0.2em] font-bold ${
                      item.active ? "text-primary" : "text-foreground/40"
                    }`}
                  >
                    {item.date}
                  </span>
                </div>

                <p className="text-primary font-sans font-bold text-sm uppercase tracking-widest mb-4 italic">
                  {item.subtitle}
                </p>

                <div className="text-foreground/70 font-sans leading-relaxed whitespace-pre-line text-base md:text-lg max-w-2xl">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
