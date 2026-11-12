import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../translations";
import { EASE_IN_OUT, EASE_OUT } from "./Reveal";

const Header = () => {
  const { scrollY } = useScroll();
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[lang].nav;

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: t.experience, href: "#experience" },
    { name: t.projects, href: "#projects" },
    { name: t.skills, href: "#skills" },
    { name: t.contact, href: "#contact" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 8);
    if (menuOpen) return;
    setHidden(latest > previous && latest > 160);
  });

  // While the mobile menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b bg-bg transition-[transform,border-color] duration-300 ease-out-strong ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled && !menuOpen ? "border-line" : "border-transparent"}`}
      >
        <div className="flex h-14 items-center justify-between px-5 md:grid md:grid-cols-3 md:px-10">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-xs uppercase tracking-[0.08em]"
          >
            Victor Contreras<span className="text-accent">.</span>
          </a>

          <nav className="hidden justify-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link text-sm text-muted transition-colors duration-200 hover:text-fg"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-1">
            <button
              onClick={toggleLang}
              aria-label={t.toggleLang}
              className="flex h-10 cursor-pointer items-center gap-1.5 px-2 font-mono text-xs uppercase transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              <span className={`transition-colors duration-200 ${lang === "es" ? "text-fg" : "text-muted"}`}>
                ES
              </span>
              <span className="text-muted">/</span>
              <span className={`transition-colors duration-200 ${lang === "en" ? "text-fg" : "text-muted"}`}>
                EN
              </span>
            </button>

            <button
              onClick={(e) => {
                // Keyboard activation has no pointer position — reveal from the button itself.
                const rect = e.currentTarget.getBoundingClientRect();
                toggleTheme({
                  x: e.clientX || rect.left + rect.width / 2,
                  y: e.clientY || rect.top + rect.height / 2,
                });
              }}
              aria-label={t.toggleTheme}
              className="flex h-10 w-10 cursor-pointer items-center justify-center transition-transform duration-150 ease-out active:scale-[0.92]"
            >
              <svg
                viewBox="0 0 16 16"
                className={`h-4 w-4 transition-transform duration-500 ease-out-strong ${
                  theme === "dark" ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden
              >
                <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 1a7 7 0 0 1 0 14z" fill="currentColor" />
              </svg>
            </button>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="-mr-2 flex h-10 cursor-pointer items-center px-2 font-mono text-xs uppercase tracking-[0.08em] transition-transform duration-150 ease-out active:scale-[0.97] md:hidden"
            >
              {menuOpen ? t.close : t.menu}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-end bg-bg px-5 pb-10 pt-24 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.3, ease: EASE_IN_OUT } }}
            transition={{ duration: 0.5, ease: EASE_IN_OUT }}
          >
            <ul>
              {navLinks.map((link, i) => (
                <li key={link.href} className="overflow-hidden border-t border-line last:border-b">
                  <motion.a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline justify-between py-4 text-[2.75rem] font-medium leading-none tracking-[-0.05em]"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.05, ease: EASE_OUT }}
                  >
                    {link.name}
                    <span className="font-mono text-xs tracking-normal text-muted">
                      (0{i + 1})
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
