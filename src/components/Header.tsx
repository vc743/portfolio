import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../translations";

const Header = () => {
  const { scrollY } = useScroll();
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[lang].nav;

  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.about, href: "#about" },
    { name: t.experience, href: "#experience" },
    { name: t.projects, href: "#projects" },
    { name: t.skills, href: "#skills" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (mobileMenuOpen) {
      setHidden(false);
      return;
    }
    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-[#0d0d0d]/80"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          Victor<span className="text-emerald-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side: toggles + mobile menu */}
        <div className="flex items-center gap-3">

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`relative flex h-7 w-14 cursor-pointer items-center rounded-full border p-[3px] transition-all duration-300 ${
              theme === "dark"
                ? "border-zinc-700/60 bg-zinc-900"
                : "border-amber-200 bg-amber-50"
            }`}
          >
            <motion.div
              className={`flex h-[22px] w-[22px] items-center justify-center rounded-full shadow-sm transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-zinc-700 text-zinc-300"
                  : "bg-white text-amber-500 shadow-amber-200"
              }`}
              animate={{ x: theme === "dark" ? 0 : 28 }}
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
            >
              {theme === "dark" ? (
                <Moon className="h-3 w-3" />
              ) : (
                <Sun className="h-3 w-3" />
              )}
            </motion.div>
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="relative flex cursor-pointer items-center rounded-full border border-zinc-200 bg-zinc-100 p-0.5 transition-colors hover:border-zinc-300 dark:border-zinc-700/60 dark:bg-zinc-900 dark:hover:border-zinc-500"
          >
            <span
              className={`relative z-10 rounded-full px-2.5 py-1 font-mono text-xs font-medium transition-all duration-300 ${
                lang === "es"
                  ? "bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                  : "text-zinc-400 dark:text-zinc-500"
              }`}
            >
              ES
            </span>
            <span
              className={`relative z-10 rounded-full px-2.5 py-1 font-mono text-xs font-medium transition-all duration-300 ${
                lang === "en"
                  ? "bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                  : "text-zinc-400 dark:text-zinc-500"
              }`}
            >
              EN
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-zinc-900 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-zinc-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-[#0d0d0d] md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  );
};

export default Header;
