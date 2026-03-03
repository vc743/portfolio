import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Very tight spring — barely any lag, just enough to feel smooth
  const springConfig = { damping: 30, stiffness: 600, mass: 0.3 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    document.body.classList.add("cursor-custom");

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(target.closest("a, button, [role='button']") !== null);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.body.classList.remove("cursor-custom");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!window.matchMedia("(hover: hover)").matches) return null;

  return (
    <>
      {/* Dot — follows exactly */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-9999 rounded-full bg-emerald-400"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovered ? 10 : 6,
          height: isHovered ? 10 : 6,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.12 }}
      />

      {/* Ring — spring follow, nearly instant */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-9998 rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: isHovered
            ? "2px solid rgba(52,211,153,0.75)"
            : "2px solid rgba(52,211,153,0.4)",
        }}
        animate={{
          width: isHovered ? 38 : 24,
          height: isHovered ? 38 : 24,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
