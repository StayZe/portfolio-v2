import React from "react";

interface AnimatedTextProps {
  text: string;
  baseDelay?: number;
  className?: string;
}

export function AnimatedText({
  text,
  baseDelay = 0,
  className = "",
}: AnimatedTextProps) {
  const words = text.split(" ");
  let globalIndex = 0;

  return (
    <span className={className}>
      {words.map((word, wordIndex) => {
        const isLastWord = wordIndex === words.length - 1;

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIndex) => {
              const delay = baseDelay + globalIndex * 30;
              globalIndex++;
              return (
                <span
                  key={charIndex}
                  className="inline-block opacity-0 animate-slide-up"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {char}
                </span>
              );
            })}

            {!isLastWord &&
              (() => {
                const delay = baseDelay + globalIndex * 30;
                globalIndex++;
                return (
                  <span
                    className="inline-block opacity-0 animate-slide-up"
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    &nbsp;
                  </span>
                );
              })()}
          </span>
        );
      })}
    </span>
  );
}
