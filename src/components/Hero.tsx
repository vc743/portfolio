import { FileDown } from "lucide-react";
import { socialLinks } from "../data";
import FadeInOnScroll from "./FadeInOnScroll";

const Hero = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-52">
      {/* Gradient line at top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 col-span-2">
            <FadeInOnScroll delay={0.25}>
              <h1 className="font-inter text-6xl font-extrabold text-white md:text-7xl lg:text-8xl">
                Hola, soy Victor<span className="text-emerald-500">.</span>
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.30}>
              <p className="font-inter text-3xl md:text-4xl lg:text-5xl text-emerald-500 font-semibold">Desarrollador Frontend</p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.35}>
              <p className="text-lg leading-relaxed text-zinc-400">
              Cuento con experiencia construyendo interfaces modernas y mantenibles, enfocado en la creación de aplicaciones eficientes y centradas en el usuario. Trabajo principalmente con React, TypeScript y TailwindCSS, utilizando herramientas de manejo de estado como Zustand. Me caracterizo por mi enfoque práctico, trabajo en equipo y compromiso con la mejora continua, aportando soluciones claras y escalables en entornos ágiles.
              </p>
            </FadeInOnScroll>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {socialLinks.map((link) => (
                <FadeInOnScroll delay={0.40}>
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className="group flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400 transition-all hover:border-emerald-500/50 hover:text-emerald-400"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                  </a>
                </FadeInOnScroll>
              ))}
              <FadeInOnScroll delay={0.40}>
                <a 
                  href="/VictorContrerasCV-ES.pdf" 
                  download="VictorContrerasCV-ES.pdf"
                  className="group flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400 transition-all hover:border-emerald-500/50 hover:text-emerald-400"
                >
                  <FileDown className="h-4 w-4"/>
                  <span>Descargar CV</span>
                </a>
              </FadeInOnScroll>
            </div>
          </div>

          {/* Geometric Illustration */}
          {/* <div className="relative hidden lg:flex lg:justify-end">
            <GeometricCubes />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
