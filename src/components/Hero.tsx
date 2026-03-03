import { FileDown } from "lucide-react";
import { socialLinks } from "../data";
import FadeInOnScroll from "./FadeInOnScroll";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import useTypewriter from "../hooks/useTypewriter";

const Hero = () => {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const displayedRole = useTypewriter(t.roles);

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-52">
      {/* Gradient line at top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 col-span-2">
            <FadeInOnScroll delay={0.25}>
              <h1 className="font-inter text-6xl font-extrabold text-zinc-900 dark:text-white md:text-7xl lg:text-8xl">
                {t.greeting}<span className="text-emerald-500">.</span>
              </h1>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.30}>
              <p className="font-inter text-3xl md:text-4xl lg:text-5xl text-emerald-500 font-semibold min-h-[1.2em]">
                {displayedRole}
                <span className="ml-0.5 inline-block w-[3px] animate-[blink_1s_step-end_infinite] rounded-sm bg-emerald-500 align-middle" style={{ height: "0.85em" }} />
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.35}>
              <p className="text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
                {t.description}
              </p>
            </FadeInOnScroll>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {socialLinks.map((link) => (
                <FadeInOnScroll delay={0.40} key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm text-zinc-500 transition-all hover:border-emerald-500/50 hover:text-emerald-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:text-emerald-400"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                  </a>
                </FadeInOnScroll>
              ))}
              <FadeInOnScroll delay={0.40}>
                <a
                  href={t.cvFile}
                  download={t.cvFileName}
                  className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm text-zinc-500 transition-all hover:border-emerald-500/50 hover:text-emerald-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:text-emerald-400"
                >
                  <FileDown className="h-4 w-4" />
                  <span>{t.downloadCV}</span>
                </a>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
