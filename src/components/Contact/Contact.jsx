import React, { useRef } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wnsvo1v",
        "template_nmz7jfd",
        form.current,
        "PVIz0U5bqjOb3e1kn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>¡Conectemos!</h5>
      <h2>Escribime</h2>
      <div className="container contact__container">
        {/* Opciones de contacto */}
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>fernandojtejerina@gmail.com</h5>
            <a href="mailto:fernandojtejerina@gmail.com" target="_blank" rel="noopener noreferrer">
              Escribir correo
            </a>
          </article>
        </div>

        {/* Formulario de contacto */}
        <form ref={form} onSubmit={sendEmail}>
          <p>Mandame un mensaje directamente desde aquí:</p>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;