import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { email } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import Reveal, { Rule } from "./Reveal";

const Contact = () => {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard blocked — fall back to opening the mail client.
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-14 px-5 md:px-10">
      <Rule />
      <div className="pb-16 pt-5 md:pb-28 md:pt-6">
        <Reveal className="flex items-start justify-between gap-6">
          <h2 className="text-[clamp(2.5rem,11.5vw,15rem)] font-semibold uppercase leading-[0.86] tracking-[-0.05em]">
            {t.title[0]}
            <br />
            {t.title[1]}
            <span className="text-accent">.</span>
          </h2>
          <span className="pt-2 font-mono text-xs text-muted md:text-sm">(04)</span>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-12 flex flex-col gap-5 md:mt-20 md:flex-row md:items-center md:gap-8"
        >
          <a
            href={`mailto:${email}`}
            className="link break-all font-serif text-[clamp(1.5rem,4.4vw,4rem)] italic leading-tight"
          >
            {email}
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex h-11 w-fit min-w-28 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-fg px-5 text-sm font-medium transition-[transform,background-color,color] duration-150 ease-out hover:bg-fg hover:text-bg active:scale-[0.97]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? "copied" : "copy"}
                initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
                transition={{ duration: 0.14, ease: "easeOut" }}
              >
                {copied ? t.copied : t.copy}
              </motion.span>
            </AnimatePresence>
            <span className="sr-only" aria-live="polite">
              {copied ? t.copied : ""}
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
