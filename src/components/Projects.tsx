import { ExternalLink, Github, Folder } from "lucide-react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="border-t border-zinc-800/50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 font-mono text-2xl font-bold text-white md:text-3xl">
          Featured Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-emerald-500/30"
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <Folder className="h-10 w-10 text-emerald-500" />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-zinc-400 transition-colors hover:text-emerald-400"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-zinc-400 transition-colors hover:text-emerald-400"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-2 font-mono text-lg font-bold text-white group-hover:text-emerald-400">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-zinc-800/80 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;