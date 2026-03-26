"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// On centralise les liens pour éviter de répéter le code
const NAV_LINKS = [
  { name: "Parcours", href: "#education" },
  { name: "Expériences", href: "#experiences" },
  { name: "Stack", href: "#stack" },
  { name: "Expertises", href: "#expertises" },
  { name: "Passions", href: "#passions" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* HEADER BUREAU & BARRE MOBILE */}
      <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-5 md:py-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl md:text-4xl font-tan tracking-tighter text-foreground transition-colors hover:text-primary z-50"
            onClick={() => setIsOpen(false)}
          >
            AM<span className="text-primary">.</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Bouton Contact mis en valeur */}
            <Link
              href="#contact"
              className="ml-4 font-sans text-xs uppercase tracking-[0.2em] font-bold text-background bg-foreground px-6 py-3 hover:bg-primary hover:text-foreground transition-all duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Bouton Menu Hamburger (Mobile) */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors p-2 z-50"
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-8 h-8" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* MENU MOBILE PLEIN ÉCRAN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-100 bg-background flex flex-col justify-center px-6 md:hidden"
          >
            {/* Faux Header pour le bouton de fermeture */}
            <div className="absolute top-0 left-0 w-full px-6 py-5 flex justify-between items-center border-b border-foreground/10">
              <Link
                href="/"
                className="text-3xl font-tan tracking-tighter text-foreground"
                onClick={() => setIsOpen(false)}
              >
                AM<span className="text-primary">.</span>
              </Link>
              <button
                className="text-foreground hover:text-primary transition-colors p-2"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer le menu"
              >
                <X className="w-8 h-8" strokeWidth={1.5} />
              </button>
            </div>

            {/* Liens Mobile */}
            <nav className="flex flex-col gap-6 mt-12">
              <span className="text-primary font-sans font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
                {`// Navigation`}
              </span>

              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl sm:text-5xl font-tan text-foreground hover:text-primary transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Lien Contact Séparé */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2 + NAV_LINKS.length * 0.1,
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="pt-8 mt-4 border-t border-foreground/10"
              >
                <Link
                  href="#contact"
                  className="text-4xl sm:text-5xl font-tan text-primary hover:text-foreground transition-colors block italic"
                  onClick={() => setIsOpen(false)}
                >
                  Let&apos;s Connect
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
