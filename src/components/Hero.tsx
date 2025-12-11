import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/vc743", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/victor-contreras-vargas/", icon: Linkedin },
  { name: "Email", href: "mailto:victorcontrerasvargas55@gmail.com", icon: Mail },
]

const Hero = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-32">
      {/* Gradient line at top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="font-mono text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Frontend Developer
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-zinc-400">
              I&apos;m a passionate frontend developer focused on building beautiful, responsive, and user-friendly web
              applications. I love turning complex problems into simple, intuitive designs.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="group flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400 transition-all hover:border-emerald-500/50 hover:text-emerald-400"
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Geometric Illustration */}
          <div className="relative hidden lg:flex lg:justify-end">
            <GeometricCubes />
          </div>
        </div>
      </div>
    </section>
  )
}

function GeometricCubes() {
  return (
    <svg viewBox="0 0 400 400" className="h-80 w-80 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Main cube */}
      <g className="opacity-60">
        <path d="M200 80 L280 130 L280 230 L200 280 L120 230 L120 130 Z" />
        <path d="M200 80 L200 180" />
        <path d="M200 180 L280 130" />
        <path d="M200 180 L120 130" />
        <path d="M200 180 L200 280" />
      </g>

      {/* Small cube top right */}
      <g className="opacity-40" transform="translate(80, -40)">
        <path d="M280 100 L320 125 L320 175 L280 200 L240 175 L240 125 Z" />
        <path d="M280 100 L280 150" />
        <path d="M280 150 L320 125" />
        <path d="M280 150 L240 125" />
      </g>

      {/* Small cube bottom left */}
      <g className="opacity-30" transform="translate(-60, 80)">
        <path d="M120 220 L160 245 L160 295 L120 320 L80 295 L80 245 Z" />
        <path d="M120 220 L120 270" />
        <path d="M120 270 L160 245" />
        <path d="M120 270 L80 245" />
      </g>

      {/* Dots */}
      <circle cx="340" cy="180" r="3" fill="currentColor" className="opacity-50" />
      <circle cx="60" cy="150" r="2" fill="currentColor" className="opacity-40" />
      <circle cx="320" cy="300" r="2" fill="currentColor" className="opacity-30" />
      <circle cx="100" cy="340" r="3" fill="currentColor" className="opacity-40" />

      {/* Connection lines */}
      <line x1="340" y1="180" x2="300" y2="160" className="opacity-20" />
      <line x1="60" y1="150" x2="100" y2="140" className="opacity-20" />
    </svg>
  )
}

export default Hero;