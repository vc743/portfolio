import { socialLinks } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="border-t border-zinc-200/50 py-12 dark:border-zinc-800/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="/" className="font-mono text-xl font-bold text-zinc-900 dark:text-white">
            Victor<span className="text-emerald-500">.</span>
          </a>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-200 p-2 text-zinc-500 transition-all hover:border-emerald-500/50 hover:text-emerald-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-emerald-400"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 text-center text-sm text-zinc-400 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
