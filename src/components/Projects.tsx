import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import Reveal, { EASE_IN_OUT } from "./Reveal";
import Section from "./Section";

const Projects = () => {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <Section id="projects" index="02" title={t.title}>
      <div className="border-b border-line">
        {projects.map((project, index) => {
          const title = t.items[index]?.title ?? project.title;
          const description = t.items[index]?.description ?? project.description;

          const image = (
            <img
              src={project.image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out-strong group-hover:scale-[1.03]"
            />
          );

          return (
            <article
              key={project.title}
              className="group grid gap-6 border-t border-line py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              {/* Image wipes in from the top the first time it is seen */}
              <motion.div
                className="aspect-[2/1] overflow-hidden border border-line bg-surface md:col-span-7"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ duration: 1, ease: EASE_IN_OUT }}
              >
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} — ${t.demo}`}
                    className="block h-full"
                  >
                    {image}
                  </a>
                ) : (
                  image
                )}
              </motion.div>

              <Reveal className="flex flex-col md:col-span-5" delay={0.1}>
                <p className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.08em] text-muted">
                  <span>{project.isPersonalProject ? t.personal : t.professional}</span>
                  <span>0{index + 1}</span>
                </p>

                <h3 className="mt-5 text-[clamp(2rem,3.6vw,3.25rem)] font-medium leading-none tracking-[-0.045em]">
                  {title}
                </h3>

                <p className="mt-5 max-w-[60ch] text-pretty leading-relaxed text-muted">
                  {description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs uppercase tracking-[0.04em]">
                  {project.tech.map((tech, i) => (
                    <li key={tech} className="flex gap-2">
                      {tech}
                      {i < project.tech.length - 1 && <span className="text-muted">/</span>}
                    </li>
                  ))}
                </ul>

                {(project.github || project.demo) && (
                  <div className="mt-8 flex gap-6 md:mt-auto md:pt-8">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link text-sm"
                      >
                        {t.demo}
                        <ArrowUpRight className="arrow h-3.5 w-3.5 text-muted" strokeWidth={1.75} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link text-sm"
                      >
                        {t.code}
                        <ArrowUpRight className="arrow h-3.5 w-3.5 text-muted" strokeWidth={1.75} />
                      </a>
                    )}
                  </div>
                )}
              </Reveal>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
