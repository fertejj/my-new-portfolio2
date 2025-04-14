import "./About.css";
import ME from "../../assets/fotoperfil.jpg";
import { FaLaptopCode, FaUserGraduate, FaRocket, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        {/* Imagen de perfil */}
        <div className="about__left">
          <div className="about__img-wrapper">
            <img src={ME} alt="Foto de perfil de Fernando Tejerina" loading="lazy" />
          </div>
        </div>

        {/* Información principal */}
        <div className="about__right">
          <h5>¡Hola! Soy</h5>
          <h2>Fernando Tejerina</h2>
          <p className="about__intro">
            Soy <strong>Full-Stack Developer</strong> y estudiante universitario de <strong>Analista Programador en Sistemas</strong>. Me apasiona diseñar y desarrollar <strong>Web Apps</strong> que generen soluciones digitales innovadoras y funcionales.
          </p>
          <p className="about__intro">
            Actualmente estoy trabajando en mi propio proyecto <strong>SaaS</strong>: <a href="https://www.miconsulta.app" target="_blank" rel="noopener noreferrer" className="about__link">MiConsulta.app</a>, una aplicación de gestión de consultorios diseñada para profesionales independientes de la salud.
          </p>

          {/* Tarjetas destacadas */}
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Formación</h5>
              <small>Analista Programador · 2° Año</small>
            </article>

            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>Stack Tecnológico</h5>
              <small>React, TypeScript, Node.js, Firebase/Mongo</small>
            </article>

            <article className="about__card">
              <FaRocket className="about__icon" />
              <h5>Proyecto Actual</h5>
              <small>SaaS: MiConsulta.app</small>
            </article>
          </div>

          {/* Botón de contacto */}
          <a
            href="https://api.whatsapp.com/send/?phone=543885765045&text&type=phone_number&app_absent=0"
            className="btn-wpp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            <span>Escribime por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
