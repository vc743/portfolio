import type { Experience } from "../types";
import FadeInOnScroll from "./FadeInOnScroll";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const companyData: Pick<Experience, "company" | "period" | "current" | "image">[] = [
  {
    company: "Signos Framework SRL",
    period: "JUL 2025 - MAR 2026",
    current: false,
    image: "https://signos-framework.com/wp-content/uploads/2024/03/logo-signos-03-768x421.webp",
  },
];

const WorkExperience = () => {
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="border-t border-zinc-200/50 py-16 dark:border-zinc-800/50">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInOnScroll delay={0.25}>
          <h2 className="mb-10 font-inter text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
            {t.title}
          </h2>
        </FadeInOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          {companyData.map((company, index) => {
            const item = t.items[index];
            return (
              <FadeInOnScroll delay={0.30} key={index}>
                <div className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700">
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                      <img src={company.image} alt="logo" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-mono font-bold text-zinc-900 dark:text-white">
                        {company.company}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.role}</p>
                      <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                        {company.period.split(" - ")[0]} -{" "}
                        {company.current ? (
                          <span className="text-emerald-500 uppercase">{t.present}</span>
                        ) : (
                          company.period.split(" - ")[1]
                        )}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
