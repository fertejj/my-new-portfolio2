import React from 'react'
import './Projects.css'
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"
import { FiGithub } from "react-icons/fi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";



const projects = [
  {
    img: IMG3,
    title: "Solutec LandingPage",
    description: "Landing page para empresa de servicios de tecnología. Diseño y desarrollo responsive en ReactJs y Tailwind.",
    date: "2024",
    repoLink: "https://github.com/fertejj/LANDING-SOLUTEC",
    demoLink: "https://www.solutecjuy.com/",
  },
  {
    img: IMG1,
    title: "ToDo List",
    description: "Aplicación de lista de tareas en ReactJs. Permite agregar, eliminar y marcar como completadas las tareas.",
    date: "2022",
    repoLink: "https://github.com/fertejj/PLATZI-react-intro",
    demoLink: "https://fertejj.github.io/PLATZI-react-intro/",
  },
  {
    img: IMG2,
    title: "Landing Page HTML CSS",
    description: "Landing page responsive con HTML y CSS. Curso de desarrollo web responsive de Platzi para practicar diseño mobile first.",
    date: "2022",
    repoLink: "https://github.com/fertejj/mobile-first-layout-course",
    demoLink: "https://fertejj.github.io/mobile-first-layout-course/",
  },
];

const PortfolioItem = ({ img, title, description, date, repoLink, demoLink }) => (
  <article className='portfolio__item'>
    <div className="portfolio__item-image">
      <img src={img} alt={title} />
    </div>
    <div className="portfolio__item-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <p style={{fontWeight: '600'}}>Año de creacion: {date}</p>
    </div>
    <div className="portfolio__item-cta">
      <a href={repoLink} className='btn repobutton' target="_blank" rel="noopener noreferrer"><FiGithub />Repositorio</a>
      <a href={demoLink} className='btn btn-primary repobutton' target="_blank" rel="noopener noreferrer"><HiOutlineRocketLaunch />Demo</a>
    </div>
  </article>
);

const Projects = () => (
  <section id='projects'>
    <h5>Mis proyectos</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      {projects.map((project, index) => (
        <PortfolioItem
          key={index}
          img={project.img}
          title={project.title}
          date={project.date}
          description={project.description}
          repoLink={project.repoLink}
          demoLink={project.demoLink}
        />
      ))}
    </div>
  </section>
);

export default Projects;
