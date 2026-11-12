/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";
import { flushSync } from "react-dom";

export type Theme = "dark" | "light";

type Origin = { x: number; y: number };

type ThemeContextType = {
  theme: Theme;
  /** Pass the pointer position to reveal the new theme from that point. */
  toggleTheme: (origin?: Origin) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// index.html sets the class before first paint; read it back here.
const getInitialTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = useCallback(
    (origin?: Origin) => {
      const next: Theme = theme === "dark" ? "light" : "dark";

      const apply = () => {
        document.documentElement.classList.toggle("dark", next === "dark");
        try {
          localStorage.setItem("theme", next);
        } catch {
          /* storage unavailable — theme still applies for this visit */
        }
        setTheme(next);
      };

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!origin || reduceMotion || !document.startViewTransition) {
        apply();
        return;
      }

      const { x, y } = origin;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => flushSync(apply));

      transition.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${radius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 550,
              easing: "cubic-bezier(0.77, 0, 0.175, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        })
        .catch(() => {
          /* transition skipped — the theme has already been applied */
        });
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
