import React from 'react';
import './Hero.css';
import ME from "../../assets/me.png";
import CV from "../../assets/FULLSTACK-TEJERINA_FERNANDO.pdf";
import { FaFileDownload, FaCheckCircle, FaProjectDiagram, FaCode } from "react-icons/fa";

const Hero = () => {
  return (
    <header className="hero">
      <div className="container hero_container">
        <div className="hero_left">
          <h3>Hola soy</h3>
          <h1 className="hero_title">Fer Tejerina</h1>
          <h3 className="text-light">Full-Stack Developer</h3>
          <p className="hero_subtitle">
            Desarrollo soluciones digitales funcionales y escalables con el stack MERN.
          </p>
          <h6 className="email">fernandojtejerina@gmail.com</h6>

          <a href={CV} className="btn" download>
            <FaFileDownload className='FaFileDownload' />Descargar CV PDF
          </a>

          <div className="hero_icons">
            <div><FaProjectDiagram /> +3 proyectos reales</div>
            <div><FaCode /> Stack MERN</div>
            <div><FaCheckCircle /> En búsqueda de oportunidades</div>
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
