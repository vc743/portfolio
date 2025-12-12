import { Github, Linkedin, Mail } from "lucide-react";
import type { Project } from "../types";

export const socialLinks = [
    { name: "GitHub", href: "https://github.com/vc743", icon: Github },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/victor-contreras-vargas/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:victorcontrerasvargas55@gmail.com",
      icon: Mail,
    },
  ];

export const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A full-featured admin dashboard for managing online stores with real-time analytics, inventory management, and order tracking.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather Application",
    description:
      "A beautiful weather app with location-based forecasts, interactive maps, and detailed meteorological data visualization.",
    tech: ["React", "OpenWeather API", "Mapbox", "CSS Modules"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Portfolio Template",
    description:
      "A customizable portfolio template for developers with dark mode support, smooth animations, and SEO optimization.",
    tech: ["Next.js", "Tailwind CSS", "MDX", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];
