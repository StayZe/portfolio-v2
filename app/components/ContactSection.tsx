"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, ArrowUpRight } from "lucide-react";
import { AnimatedButton } from "./AnimatedButton";

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Bloquer le scroll de la page quand la modale est ouverte
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <section
        id="contact"
        className="w-full pt-32 pb-12 bg-background text-foreground relative overflow-hidden flex flex-col items-center border-t border-foreground/10"
      >
        <div className="mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="mb-16 w-full cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            {/* Typographie Géante Façon Studio */}
            <h2 className="text-[12vw] leading-none font-tan text-foreground tracking-tighter uppercase transition-colors duration-500 group-hover:text-foreground/80">
              Me <br /> <span className="text-primary italic">Contacter</span>
            </h2>
          </motion.div>

          {/* Bouton pour déclencher la modale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-32"
          >
            <AnimatedButton
              text="Me contacter"
              onClick={() => setIsModalOpen(true)}
            />
          </motion.div>

          {/* Mini-Footer intégré */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-foreground/10 text-foreground/50 font-sans text-xs uppercase tracking-widest font-bold">
            <p>© {new Date().getFullYear()} Antoine Mandra.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="https://github.com/StayZe"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/antoine-mandra-401147240/?locale=en"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODALE DE CONTACT --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
            {/* Overlay sombre en arrière-plan (cliquable pour fermer) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-md cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Conteneur de la Modale */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-foreground/20 p-8 md:p-16 shadow-2xl"
            >
              {/* Bouton Fermer */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-foreground/50 hover:text-primary transition-colors p-2"
              >
                <X className="w-8 h-8" strokeWidth={1.5} />
              </button>

              <div className="mb-12">
                <span className="text-primary font-sans font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                  {`// Contact`}
                </span>
                <h3 className="text-4xl md:text-5xl font-tan text-foreground leading-tight">
                  Discutons de votre <br />
                  <span className="italic text-foreground/70">
                    prochain projet.
                  </span>
                </h3>
              </div>

              <div className="flex flex-col gap-6">
                {/* Lien Email */}
                <a
                  href="mailto:mandra.antoine@gmail.com"
                  className="group flex items-center justify-between p-6 md:p-8 border border-foreground/10 bg-background hover:border-primary transition-colors duration-500"
                >
                  <div className="flex items-center gap-6">
                    <Mail
                      className="w-6 h-6 text-foreground/50 group-hover:text-primary transition-colors"
                      strokeWidth={1.5}
                    />
                    <div className="flex flex-col">
                      <span className="text-foreground/50 font-sans text-xs uppercase tracking-widest font-bold mb-1">
                        Email
                      </span>
                      <span className="text-foreground font-sans text-lg md:text-xl font-medium">
                        mandra.antoine@gmail.com
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-foreground/20 group-hover:text-primary transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                {/* Lien Téléphone */}
                <a
                  href="tel:+33620600952"
                  className="group flex items-center justify-between p-6 md:p-8 border border-foreground/10 bg-background hover:border-primary transition-colors duration-500"
                >
                  <div className="flex items-center gap-6">
                    <Phone
                      className="w-6 h-6 text-foreground/50 group-hover:text-primary transition-colors"
                      strokeWidth={1.5}
                    />
                    <div className="flex flex-col">
                      <span className="text-foreground/50 font-sans text-xs uppercase tracking-widest font-bold mb-1">
                        Téléphone
                      </span>
                      <span className="text-foreground font-sans text-lg md:text-xl font-medium">
                        06 20 60 09 52
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-foreground/20 group-hover:text-primary transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
