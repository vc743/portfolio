// import { Palette } from "lucide-react";
import type { Experience } from "../types";
import FadeInOnScroll from "./FadeInOnScroll";

const experiences: Experience[] = [
  {
    company: "Signos Framework SRL",
    role: "Desarrollador Frontend",
    period: "JUL 2025 - Actualidad",
    current: true,
    description:
      "Desarrollo interfaces web con React y TypeScript, enfocadas en usabilidad y rendimiento, utilizando TailwindCSS y Zustand para crear soluciones escalables. Integro APIs REST y colaboro activamente en equipos ágiles para mejorar la calidad del producto.",
    image: "https://signos-framework.com/wp-content/uploads/2024/03/logo-signos-03-768x421.webp",
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="border-t border-zinc-800/50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <FadeInOnScroll delay={0.25}>
          <h2 className="mb-10 font-inter text-2xl font-bold text-white md:text-3xl">
            Experiencia Laboral
          </h2>
        </FadeInOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <FadeInOnScroll delay={0.30}>
              <div
                key={index}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-zinc-700"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <img src={exp.image} alt="logo" />
                    {/* <exp.icon className="h-5 w-5 text-emerald-500" /> */}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-mono font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-zinc-400">{exp.role}</p>
                    <p className="mt-1 text-xs text-zinc-500">
                      {exp.period.split(" - ")[0]} -{" "}
                      {exp.current ? (
                        <span className="text-emerald-500 uppercase">Actualidad</span>
                      ) : (
                        exp.period.split(" - ")[1]
                      )}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {exp.description}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
