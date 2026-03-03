import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";
import FadeInOnScroll from "./FadeInOnScroll";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Projects = () => {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <section id="projects" className="border-t border-zinc-200/50 py-16 dark:border-zinc-800/50">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInOnScroll delay={0.25}>
          <h2 className="mb-10 font-inter text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">{t.title}</h2>
        </FadeInOnScroll>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeInOnScroll delay={0.30} key={index}>
              <div className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-300 hover:border-emerald-500/40 dark:border-zinc-800 dark:bg-zinc-900/30">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-60" />

                  {/* Overlay Links */}
                  <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/80 text-zinc-300 backdrop-blur-sm transition-colors hover:bg-emerald-500 hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/80 text-zinc-300 backdrop-blur-sm transition-colors hover:bg-emerald-500 hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-2 font-mono text-lg font-bold text-zinc-900 transition-colors group-hover:text-emerald-500 dark:text-white dark:group-hover:text-emerald-400">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {t.items[index]?.description ?? project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-500 dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
