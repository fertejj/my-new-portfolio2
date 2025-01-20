import React from "react";
import "./About.css";
import ME from "../../assets/fotoperfil.jpg";
import AboutCards from "./AboutCards/AboutCards";

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
                        Soy estudiante de segundo año de la carrera de Analista Programador, donde he aprendido habilidades que han profesionalizado mi trabajo.
                        <br/>
                        Cuento con experiencia en desarrollo web, utilizando tecnologías como React JS/TS y Google Firebase. He desarrollado proyectos personales y académicos, los cuales están visibles en mi perfil.
                        <br/>
                        Actualmente, estoy trabajando en un proyecto personal que automatiza la creación de landing pages sencillas, permitiendo a los usuarios compartir múltiples enlaces con sus seguidores.
                        <br/>
                        Me interesa trabajar en equipos ágiles para crear soluciones escalables e innovadoras, con un enfoque en el desarrollo web. Busco nuevos desafíos que me permitan aplicar mis habilidades técnicas y continuar creciendo profesionalmente en entornos dinámicos y orientados a resultados.
                    </p>

                </div>
                <AboutCards />
                <div className="contact__button">
                    <a href="https://api.whatsapp.com/send/?phone=543885765045&text&type=phone_number&app_absent=0" className="btn-wpp">Escribeme por WhatsApp</a>


                </div>
                <div>

                </div>

            </div>
        </section>
    );
};

export default About;
