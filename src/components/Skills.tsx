import { skills } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import Reveal from "./Reveal";
import Section from "./Section";

const Skills = () => {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <Section id="skills" index="03" title={t.title}>
      <ul className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <li key={skill.name} className="border-b border-r border-line">
            {/* Stagger within a row only, so late rows never wait on early ones */}
            <Reveal delay={(index % 4) * 0.05} className="h-full">
              <div className="group flex h-32 flex-col justify-between p-4 transition-colors duration-200 hover:bg-surface md:h-40 md:p-5">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* Monochrome at rest; the brand colour shows on hover */}
                  <span className="opacity-60 grayscale transition-[filter,opacity] duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                    {skill.icon}
                  </span>
                </div>
                <span className="text-lg font-medium tracking-[-0.03em] md:text-xl">
                  {skill.name}
                </span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
