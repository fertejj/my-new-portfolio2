import React from 'react'
import "./Footer.css"
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">fertejj</a>
      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className='footer__socials'>
       <a href="https://www.linkedin.com/in/fertejj/" target="_blank"><BsLinkedin/></a> 
       <a href="https://github.com/fertejj" target="_blank"><BsGithub/></a> 

      </div>
      <div className="footer__copyright">Diseñado y desarrollado por Fernando Tejerina (fertejj)</div>
      <div className="footer__copyright">fernandojtejerina@gmail.com</div>
    </footer>
  )
}

export default Footer