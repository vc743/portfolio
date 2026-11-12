import { companies } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import Reveal from "./Reveal";
import Section from "./Section";

const WorkExperience = () => {
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <Section id="experience" index="01" title={t.title}>
      <ul className="border-b border-line">
        {companies.map((company, index) => {
          const item = t.items[index];
          const [from, to] = company.period.split(" - ");

          return (
            <li key={company.company} className="border-t border-line">
              <Reveal className="grid gap-5 py-8 md:grid-cols-12 md:gap-10 md:py-10">
                <p className="pt-1.5 font-mono text-xs uppercase tracking-[0.08em] text-muted md:col-span-3">
                  {from} —{" "}
                  {company.current ? <span className="text-accent">{t.present}</span> : to}
                </p>

                <div className="md:col-span-4">
                  <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                    {company.company}
                  </h3>
                  <p className="mt-1 font-serif text-xl italic text-muted md:text-2xl">
                    {item.role}
                  </p>
                </div>

                <p className="max-w-[60ch] text-pretty leading-relaxed text-muted md:col-span-5">
                  {item.description}
                </p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default WorkExperience;
