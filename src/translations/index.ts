export const translations = {
  es: {
    nav: {
      about: "Sobre mi",
      experience: "Experiencia Laboral",
      projects: "Proyectos",
      skills: "Tecnologías",
    },
    hero: {
      greeting: "Hola, soy Victor",
      title: "Desarrollador Frontend",
      roles: ["Desarrollador Frontend", "React Developer", "UI Engineer"],
      description:
        "Cuento con experiencia construyendo interfaces modernas y mantenibles, enfocado en la creación de aplicaciones eficientes y centradas en el usuario. Trabajo principalmente con React, TypeScript y TailwindCSS, utilizando herramientas de manejo de estado como Zustand. Me caracterizo por mi enfoque práctico, trabajo en equipo y compromiso con la mejora continua, aportando soluciones claras y escalables en entornos ágiles.",
      downloadCV: "Descargar CV",
      cvFile: "/VictorContrerasCV-ES.pdf",
      cvFileName: "VictorContrerasCV-ES.pdf",
    },
    experience: {
      title: "Experiencia Laboral",
      present: "Actualidad",
      items: [
        {
          role: "Desarrollador Frontend",
          description:
            "Desarrollo interfaces web con React y TypeScript, enfocadas en usabilidad y rendimiento, utilizando TailwindCSS y Zustand para crear soluciones escalables. Integro APIs REST y colaboro activamente en equipos ágiles para mejorar la calidad del producto.",
        },
      ],
    },
    projects: {
      title: "Proyectos",
      items: [
        {
          description:
            "Desarrollo de una aplicación full-stack MERN para el seguimiento de entrenamientos, con funcionalidades CRUD para la gestión de ejercicios. Construcción de interfaces responsivas en React, manejo de estado con Context API e integración con Node.js, Express y MongoDB.",
        },
      ],
    },
    skills: {
      title: "Tecnologías",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      about: "About Me",
      experience: "Work Experience",
      projects: "Projects",
      skills: "Technologies",
    },
    hero: {
      greeting: "Hi, I'm Victor",
      title: "Frontend Developer",
      roles: ["Frontend Developer", "React Developer", "UI Engineer"],
      description:
        "I have experience building modern and maintainable interfaces, focused on creating efficient, user-centered applications. I work primarily with React, TypeScript and TailwindCSS, using state management tools like Zustand. I'm known for my practical approach, teamwork and commitment to continuous improvement, delivering clear and scalable solutions in agile environments.",
      downloadCV: "Download CV",
      cvFile: "/VictorContrerasCV-ES.pdf",
      cvFileName: "VictorContrerasCV-ES.pdf",
    },
    experience: {
      title: "Work Experience",
      present: "Present",
      items: [
        {
          role: "Frontend Developer",
          description:
            "I develop web interfaces with React and TypeScript, focused on usability and performance, using TailwindCSS and Zustand to build scalable solutions. I integrate REST APIs and actively collaborate in agile teams to improve product quality.",
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          description:
            "Development of a full-stack MERN application for workout tracking, with CRUD features for exercise management. Built responsive React interfaces, managed state with Context API and integrated Node.js, Express and MongoDB.",
        },
      ],
    },
    skills: {
      title: "Technologies",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const;

export type Translations = typeof translations;
