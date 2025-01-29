import "./About.css";
import ME from "../../assets/fotoperfil.jpg";
import AboutCards from "./AboutCards/AboutCards";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <section className="section-about" id="about">
      <h5>Conoce</h5>
      <h2>Sobre Mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about her self" />
          </div>
        </div>
        <div className="about__content">
          <p className="about__text">
            Soy estudiante de segundo año de la carrera de Analista Programador.
            <br />
            <br />
            Un real apasionado por las computadoras.
            <br />
            <br />
            Cuento con experiencia en desarrollo web, utilizando tecnologías
            como React JS/TS, Firebase, XAMPP(Apache, MySQL), NodeJs con
            Express. He desarrollado pocos proyectos personales ya que me
            dedique a estudiar, ahora si he pasado a un nuevo nivel de
            aprendizaje y práctica.
            <br />
            <br />
            Actualmente, me encuentro en la fase de desarrollo de una Web App
            que será un registro de operaciones de trading con backend en
            express js mysql y frontend en react.
            <br />
            <br />
            Me interesa trabajar en equipos de trabajos dinámicos, donde pueda
            retroalimentarme de mis compañeros y poder continuar creciendo como
            profesional.
          </p>
        </div>
        <AboutCards />
        <div className="contact__button">
          <a
            href="https://api.whatsapp.com/send/?phone=543885765045&text&type=phone_number&app_absent=0"
            className="btn-wpp"
          >
            <span>
              <FaWhatsapp />
            </span>
            Escribeme por WhatsApp
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
