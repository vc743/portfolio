import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavLink } from "../types";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const navLinks: NavLink[] = [
  { name: "Sobre mi", href: "#about" },
  { name: "Experiencia Laboral", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Tecnologias", href: "#skills" },
];

const Header = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // No ocultar el header si el menú móvil está abierto
    if (mobileMenuOpen) {
      setHidden(false);
      return;
    }
    if (latest > previous! && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
    variants={{
      visible: { y: 0 },
      hidden: { y: "-100%" },
    }}
    animate={hidden ? "hidden" : "visible"}
    transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 border-b border-zinc-800/50 bg-[#0d0d0d]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-xl font-bold tracking-tight text-white"
        >
          Victor<span className="text-emerald-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-zinc-800 bg-[#0d0d0d] px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-zinc-400 transition-colors hover:text-white"
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
