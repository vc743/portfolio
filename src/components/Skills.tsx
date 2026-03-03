import { skills } from "../data";
import FadeInOnScroll from "./FadeInOnScroll";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Skills = () => {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <section id="skills" className="border-t border-zinc-200/50 py-20 dark:border-zinc-800/50">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInOnScroll delay={0.25}>
          <h2 className="mb-12 font-inter text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
            {t.title}
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6">
          {skills.map((skill, index) => (
            <FadeInOnScroll index={index} key={skill.name}>
              <div className="group flex flex-col items-center gap-3 rounded-lg border border-zinc-200/80 bg-white p-5 transition-all duration-300 hover:border-emerald-500/50 hover:bg-zinc-50 dark:border-zinc-800/50 dark:bg-zinc-900/30 dark:hover:bg-zinc-800/50">
                <div className="text-zinc-400 transition-colors duration-300 group-hover:text-emerald-500 dark:text-zinc-400">
                  {skill.icon}
                </div>
                <span className="text-center text-xs font-medium text-zinc-500 transition-colors duration-300 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
