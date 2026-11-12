import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT } from "./Reveal";

type RotatingTextProps = {
  words: readonly string[];
  intervalMs?: number;
  className?: string;
};

/** Cycles through `words`, swapping each one with a short blurred slide. */
const RotatingText = ({ words, intervalMs = 3200, className }: RotatingTextProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    const id = setInterval(() => setIndex((i) => i + 1), intervalMs);
    return () => clearInterval(id);
  }, [words, intervalMs]);

  const word = words[index % words.length];

  return (
    <span className={`relative block ${className ?? ""}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={word}
          className="block"
          initial={{ opacity: 0, y: "40%", filter: "blur(6px)" }}
          animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
          exit={{ opacity: 0, y: "-40%", filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
