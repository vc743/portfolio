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
      roles: ["Desarrollador Frontend", "Desarrollador React"],
      description:
        "Cuento con experiencia construyendo interfaces modernas y mantenibles, enfocado en la creación de aplicaciones eficientes y centradas en el usuario. Trabajo principalmente con React, TypeScript y TailwindCSS, utilizando herramientas de manejo de estado como Zustand. Me caracterizo por mi enfoque práctico, trabajo en equipo y compromiso con la mejora continua, aportando soluciones claras y escalables en entornos ágiles.",
      downloadCV: "Descargar CV",
      cvFile: "/Victor-Contreras(CV-ES-Frontend).pdf",
      cvFileName: "Victor-Contreras(CV-ES-Frontend).pdf",
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
          title: "Solicitud de Efectivo",
          description:
            "Es una plataforma diseñada para gestionar de manera eficiente, controlada y transparente las solicitudes de fondos dentro de una organización. Su objetivo principal es optimizar el proceso de requerimiento, aprobación y desembolso de efectivo, garantizando trazabilidad y control financiero.",
        },
        {
          title: "Exercise Tracker",
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
      roles: ["Frontend Developer", "React Developer"],
      description:
        "I have experience building modern and maintainable interfaces, focused on creating efficient, user-centered applications. I work primarily with React, TypeScript and TailwindCSS, using state management tools like Zustand. I'm known for my practical approach, teamwork and commitment to continuous improvement, delivering clear and scalable solutions in agile environments.",
      downloadCV: "Download CV",
      cvFile: "/Victor-Contreras(CV-EN-Frontend).pdf",
      cvFileName: "Victor-Contreras(CV-EN-Frontend).pdf",
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
          title: "Cash Request",
          description:
            "It is a platform designed to efficiently, controllably, and transparently manage fund requests within an organization. Its main objective is to optimize the process of requesting, approving, and allocating cash, ensuring traceability and financial control.",
        },
        {
          title: "Exercise Tracker",
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
