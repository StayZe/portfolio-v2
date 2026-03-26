import Link from "next/link";

interface AnimatedButtonProps {
  text: string;
  href?: string; // Devenu optionnel
  onClick?: () => void; // Ajout du onClick
  className?: string; // Pour pouvoir ajouter des marges (comme mb-32) si besoin
}

export function AnimatedButton({
  href,
  onClick,
  text,
  className = "",
}: AnimatedButtonProps) {
  // Le contenu interne reste exactement le même (Ta DA parfaite)
  const innerContent = (
    <>
      {/* État 1 : Statique (Texte Crème) */}
      <span className="text-foreground font-tan leading-none whitespace-nowrap uppercase tracking-wider">
        {text}
      </span>

      {/* État 2 : Masque au hover (Remplissage de droite à gauche) */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-foreground transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] [clip-path:inset(0_0_0_100%)] group-hover:[clip-path:inset(0_0_0_0)]"
        aria-hidden="true"
      >
        <span className="text-primary font-tan leading-none whitespace-nowrap uppercase tracking-wider">
          {text}
        </span>
      </div>
    </>
  );

  const baseClasses = `group relative inline-flex items-center justify-center px-6 py-3 md:px-10 md:py-5 rounded-lg cursor-pointer border border-foreground bg-transparent overflow-hidden ${className}`;

  // Si on a un lien, on retourne un <Link> Next.js
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {innerContent}
      </Link>
    );
  }

  // Sinon, on retourne un simple <button>
  return (
    <button onClick={onClick} className={baseClasses}>
      {innerContent}
    </button>
  );
}
