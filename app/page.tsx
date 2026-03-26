import { AnimatedText } from "./components/AnimatedText";
import { EducationSection } from "./components/Education";
import { StackSection } from "./components/Stack";
import { PassionsSection } from "./components/Passions";
import { ExperienceSection } from "./components/Experience";
import { AnimatedButton } from "./components/AnimatedButton";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { ContactSection } from "./components/ContactSection";
import Image from "next/image";

export default function Home() {
  const birthDate = new Date("2005-08-20");
  const today = new Date();

  // Calculate age safely without using Date.now() directly in a way that triggers the React purity linter overly aggressively,
  // though new Date() is technically still evaluated at render.
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <div className="text-neutral-900 flex flex-col items-center">
      {/* Hero Content */}
      <main className="flex-1 flex flex-col justify-center items-center text-center max-w-7xl w-full min-h-[85vh] py-12 px-6 md:px-12 lg:px-24 mt-20">
        <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] tracking-[-0.04em] leading-[1.05] mb-8 flex flex-col items-center">
          <AnimatedText
            className="text-primary font-tan"
            text="Antoine Mandra"
            baseDelay={0}
          />

          {/* Conteneur flex pour aligner les vagues avec le texte */}
          <span className="inline-flex items-center justify-center gap-4 md:gap-8 mt-2 md:mt-4">
            {/* Vague Gauche */}
            <Image
              src="/svg/wave.svg"
              alt="Wave decoration"
              width={100}
              height={100}
              className="w-10 md:w-16 h-auto opacity-0 animate-slide-up"
              style={{ animationDelay: "1200ms" }} // Apparaît quand le texte termine son animation
            />

            <AnimatedText
              text="Développeur Web Fullstack"
              className="text-foreground font-tan italic"
              baseDelay={500}
            />

            {/* Vague Droite */}
            <Image
              src="/svg/wave.svg"
              alt="Wave decoration"
              width={100}
              height={100}
              className="w-10 md:w-16 h-auto opacity-0 animate-slide-up"
              style={{ animationDelay: "1200ms" }}
            />
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-foreground mb-12 max-w-2xl leading-relaxed font-sans font-light animate-slide-up"
          style={{ animationDelay: "1350ms" }}
        >
          Je m&apos;appelle Antoine Mandra, développeur web de {age} ans. Je
          transforme vos idées en expériences numériques exceptionnelles et
          innovantes avec Next.js, PayloadCMS, Wordpress et Elementor.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up"
          style={{ animationDelay: "1500ms" }}
        >
          <AnimatedButton href="#education" text="Découvrez mon parcours" />
        </div>
      </main>

      {/* Education Section */}
      <EducationSection />

      <ExperienceSection />

      {/* Tech Stack Section */}
      <StackSection />

      {/* Passions 3D Section */}

      <ExpertiseSection />

      <PassionsSection />

      <ContactSection />
    </div>
  );
}
