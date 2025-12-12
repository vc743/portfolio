import { Palette } from "lucide-react";
import type { Experience } from "../types";

const experiences: Experience[] = [
  {
    company: "Creative Studio",
    role: "Junior Frontend Developer",
    period: "JUL 2025 - PRESENT",
    current: true,
    description:
      "Built responsive websites and landing pages for clients across different industries. Learned and applied modern frontend technologies and best practices.",
    icon: Palette,
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="border-t border-zinc-800/50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 font-mono text-2xl font-bold text-white md:text-3xl">
          Work Experience
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-zinc-700"
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                  <exp.icon className="h-5 w-5 text-emerald-500" />
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
                      <span className="text-emerald-500">PRESENT</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
