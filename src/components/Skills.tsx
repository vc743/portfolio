import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="border-t border-zinc-800/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 font-mono text-2xl font-bold text-white md:text-3xl">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-5 transition-all duration-300 hover:border-emerald-500/50 hover:bg-zinc-800/50"
            >
              <div className="text-zinc-400 transition-colors duration-300 group-hover:text-emerald-500">
                {skill.icon}
              </div>
              <span className="text-center text-xs font-medium text-zinc-400 transition-colors duration-300 group-hover:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
