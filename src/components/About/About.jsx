import "./About.css";
import ME from "../../assets/fotoperfil.jpg";
import { FaLaptopCode, FaUserGraduate, FaRocket, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Conocé un poco más</h5>
      <h2>Sobre mí</h2>

      <div className="container about__container">
        <div className="about__left">
          <div className="about__img-wrapper">
            <img src={ME} alt="Foto de perfil de Ferteji" loading="lazy" />
          </div>
        </div>

        <div className="about__right">
          <div className="about__intro">
            <p>
              Soy estudiante de segundo año en la carrera de <strong>Analista Programador</strong> y un apasionado por la informática desde siempre.
            </p>
            <p>
              Me dedico al <strong>desarrollo web fullstack</strong>, combinando tecnologías como <strong>React JS/TS, Node.js, Express, MySQL</strong> y herramientas como <strong>Google Cloud</strong> y <strong>Mongo Atlas</strong>.
            </p>
            <p>
              Actualmente estoy desarrollando una <strong>Web App de registro de operaciones de trading</strong>, combinando front y back con un enfoque profesional.
            </p>
            <p>
              Me interesa colaborar en <strong>equipos dinámicos</strong>, donde el aprendizaje y la mejora constante estén presentes.
            </p>
          </div>

          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Formación</h5>
              <small>Analista Programador · 2° Año</small>
            </article>

            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>Stack Tecnológico</h5>
              <small>React, TypeScript, Node, MySQL</small>
            </article>

            <article className="about__card">
              <FaRocket className="about__icon" />
              <h5>Proyecto Actual</h5>
              <small>Web App de Trading · MERN</small>
            </article>
          </div>

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
