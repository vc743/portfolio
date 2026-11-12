import { ArrowUp, ArrowUpRight } from "lucide-react";
import { socialLinks } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="px-5 md:px-10">
      <div className="flex flex-col gap-6 border-t border-line py-6 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-muted">
          © {new Date().getFullYear()} Victor Contreras. {t.rights}
        </p>

        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="link">
                {link.name}
                <ArrowUpRight className="arrow h-3.5 w-3.5 text-muted" strokeWidth={1.75} />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => window.scrollTo({ top: 0 })}
          className="group inline-flex w-fit cursor-pointer items-center gap-1.5 transition-transform duration-150 ease-out active:scale-[0.97]"
        >
          {t.top}
          <ArrowUp
            className="h-3.5 w-3.5 transition-transform duration-300 ease-out-strong group-hover:-translate-y-0.5"
            strokeWidth={1.75}
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
