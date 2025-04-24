import React from 'react';
import './Hero.css';
import ME from "../../assets/me.png";
import CV from "../../assets/CV_Fernando_Tejerina_MERN.pdf";
import { FaFileDownload, FaCheckCircle, FaProjectDiagram, FaTools } from "react-icons/fa";

const Hero = () => {
  return (
    <header className="hero">
      <div className="container hero_container">
        <div className="hero_left">
          <h3>Hola soy</h3>
          <h1 className="hero_title">Fer Tejerina</h1>
          <h3 className="text-light">Full-Stack Developer</h3>
          <p className="hero_subtitle">
            Desarrollo soluciones digitales funcionales y escalables utilizando tecnologías adaptadas a las necesidades de cada proyecto.
          </p>
          <h6 className="email">fernandojtejerina@gmail.com</h6>

          <a href={CV} className="btn" download>
            <FaFileDownload className='FaFileDownload' />Descargar CV PDF
          </a>

          <div className="hero_icons">
            <div><FaProjectDiagram /><span>+4 proyectos reales</span></div>
            <div><FaTools /><span>Tecnologías adaptadas al proyecto</span></div>
            <div><FaCheckCircle /><span>En búsqueda de oportunidades</span></div>
          </div>
        </div>

        <div className="hero_right">
          <img src={ME} alt="me" className="hero_image" />
        </div>

        <a href="#contact" className='scroll__down'>↓ Desliza hacia abajo</a>
      </div>
    </header>
  );
};

export default Hero;
