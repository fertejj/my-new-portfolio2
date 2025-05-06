import "./About.css";
import ME from "../../assets/fotoperfil.jpg";
import { FaLaptopCode, FaUserGraduate, FaRocket, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about__container">
        
        {/* Imagen de perfil */}
        <div className="about__left">
          <div className="about__img-wrapper">
            <img src={ME} alt="Foto de perfil de Fernando Tejerina" loading="lazy" />
          </div>
        </div>

        {/* Información principal */}
        <div className="about__right">
          <h1>Fernando Tejerina</h1>
          <h2>Full-Stack Developer · Analista Programador</h2>

          <p className="about__intro">
            Soy <strong>Fullstack Web Developer</strong> con formación técnica en programación y experiencia desarrollando productos digitales completos con <strong>React, TypeScript, Firebase</strong> y <strong>Google Cloud Functions</strong>. 
          </p>
          <p className="about__intro">
            Actualmente estoy construyendo <a href="https://www.miconsulta.app" target="_blank" rel="noopener noreferrer" className="about__link">MiConsulta.app</a>, un sistema <strong>SaaS</strong> para turnos médicos y gestión de pacientes, diseñado para profesionales de la salud. Mi background en medicina me permite entender profundamente las necesidades del sector y aportar soluciones tecnológicas reales.
          </p>

          {/* Tarjetas informativas */}
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Formación</h5>
              <small>Analista Programador · 2° Año</small>
            </article>

            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>Stack Tecnológico</h5>
              <small>React, TypeScript, Firebase, GCP, Node.js</small>
            </article>

            <article className="about__card">
              <FaRocket className="about__icon" />
              <h5>Proyecto Actual</h5>
              <small>SaaS: MiConsulta.app</small>
            </article>
          </div>

          {/* Botón de contacto */}
          <a
            href="https://api.whatsapp.com/send/?phone=543885765045&text=Hola%2C+Fernando.+Vi+tu+portfolio+y+me+gustar%C3%ADa+hablar+con+vos."
            className="btn-wpp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
            <span>Escribime por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
