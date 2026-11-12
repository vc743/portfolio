import type { CSSProperties } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { socialLinks } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import RotatingText from "./RotatingText";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const Hero = () => {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section id="about" className="flex min-h-svh flex-col px-5 pb-6 pt-20 md:px-10 md:pb-8">
      <div className="flex flex-1 flex-col justify-end">
        <div
          className="fade-up flex items-center justify-between font-mono text-xs uppercase tracking-[0.08em] text-muted"
          style={delay(250)}
        >
          <span>{t.greeting}</span>
          <span>Portfolio — {new Date().getFullYear()}</span>
        </div>

        <h1 className="mt-3 text-[clamp(3.4rem,15.6vw,19rem)] font-semibold uppercase leading-[0.82] tracking-[-0.05em] md:mt-4">
          <span className="line-mask pt-[0.06em]">
            <span className="line-rise">Victor</span>
          </span>
          <span className="line-mask pt-[0.06em]">
            <span className="line-rise" style={delay(80)}>
              Contreras<span className="text-accent">.</span>
            </span>
          </span>
        </h1>
      </div>

      <div className="mt-8 grid gap-8 border-t border-line pt-6 md:mt-12 md:grid-cols-12 md:gap-10 md:pt-8">
        <div className="fade-up md:col-span-5" style={delay(350)}>
          <RotatingText
            words={t.roles}
            className="font-serif text-[clamp(2rem,4.2vw,3.75rem)] italic leading-[1.05] tracking-[-0.01em]"
          />
        </div>

        <div className="fade-up md:col-span-6 md:col-start-7" style={delay(430)}>
          <p className="max-w-[60ch] text-pretty leading-relaxed text-muted">{t.description}</p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={t.cvFile}
              download={t.cvFileName}
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              {t.downloadCV}
              <ArrowDown
                className="h-4 w-4 transition-transform duration-300 ease-out-strong group-hover:translate-y-0.5"
                strokeWidth={1.75}
              />
            </a>

            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-sm"
              >
                {link.name}
                <ArrowUpRight className="arrow h-3.5 w-3.5 text-muted" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
