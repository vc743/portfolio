import type { ReactNode } from "react";
import { motion } from "motion/react";

export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

type RevealProps = {
  children: ReactNode;
  /** Seconds. Keep staggers short (30–80ms between siblings). */
  delay?: number;
  className?: string;
};

/** Fades content up once, the first time it scrolls into view. */
const Reveal = ({ children, delay = 0, className }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    transition={{ duration: 0.7, delay, ease: EASE_OUT }}
  >
    {children}
  </motion.div>
);

/** Hairline that draws itself from left to right when it enters the viewport. */
export const Rule = ({ className = "" }: { className?: string }) => (
  <motion.div
    aria-hidden
    className={`h-px origin-left bg-line ${className}`}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    transition={{ duration: 1.1, ease: EASE_IN_OUT }}
  />
);

export default Reveal;
