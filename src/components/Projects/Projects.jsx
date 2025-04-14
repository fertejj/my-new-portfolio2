// Projects.jsx - Refactorizado
import "./Projects.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import { FiGithub } from "react-icons/fi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const projects = [
  {
    img: IMG4,
    title: "MiConsulta - App turnos médicos",
    description:
      "Sistema de gestión de turnos médicos desarrollado con React, TypeScript, Tailwind CSS y Firebase. Incluye panel profesional, registro multistep, validaciones en tiempo real y diseño modular.",
    date: "2025",
    repoLink: "https://github.com/fertejj/turnos-salud-fertejj",
    demoLink: "https://miconsulta.app/",
  },
  {
    img: IMG2,
    title: "TradeReg - Registro de Operaciones",
    description:
      "Aplicación MERN para registrar y analizar operaciones de trading. Ofrece gráficos interactivos, estadísticas clave y diseño responsive.",
    date: "2025",
    repoLink: "https://github.com/fertejj/tradereg-frontend",
    demoLink: "https://tradereg-frontend.vercel.app/",
  },
  {
    img: IMG3,
    title: "Solutec Landing Page",
    description:
      "Landing page profesional para servicios tecnológicos. Desarrollada con React y Tailwind CSS, con diseño moderno y completamente responsive.",
    date: "2024",
    repoLink: "https://github.com/fertejj/LANDING-SOLUTEC",
    demoLink: "https://www.solutecjuy.com/",
  },
  {
    img: IMG1,
    title: "ToDo List App",
    description:
      "Aplicación de lista de tareas en React con almacenamiento local, dark mode y diseño responsive. Refactorizada con TypeScript.",
    date: "2022, Refactorizada en 2025",
    repoLink: "https://github.com/fertejj/todo_list_ts/",
    demoLink: "https://todo-list-ts-ruby.vercel.app/",
  },
];

const ProjectCard = ({ img, title, description, date, repoLink, demoLink }) => (
  <article className="project__card">
    <div className="project__image">
      <img src={img} alt={`Preview de ${title}`} loading="lazy" />
    </div>
    <div className="project__info">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="project__year">{date}</span>
    </div>
    <div className="project__cta">
      <a
        href={repoLink}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub /> Código
      </a>
      <a
        href={demoLink}
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HiOutlineRocketLaunch /> Demo
      </a>
    </div>
  </article>
);

const Projects = () => (
  <section id="projects">
    <h5>Proyectos destacados</h5>
    <h2>Mi Portfolio</h2>
    <div className="container project__grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
