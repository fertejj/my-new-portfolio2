import React from 'react'
import './Hero.css'
import ME from "../../assets/me.png"
import CV from "../../assets/FULLSTACK-TEJERINA_FERNANDO.pdf"
import { FaFileDownload } from "react-icons/fa";



const Hero = () => {
    return (
        <header>
            <div className="container header_container">
                <div className="center">
                    <h3>Hola soy</h3>
                    <h1>Fer Tejerina</h1>
                    <h3 className="text-light">Full-Stack Developer</h3>
                    <h6 className='email'>fernandojtejerina@gmail.com</h6>
                    <div className="me">
                        <img src={ME} alt="me" />
                        <a href={CV} className="btn" download><FaFileDownload className='FaFileDownload' />Descargar CV PDF</a>
                    </div>
                </div>

                <a href="#contact" className='scroll__down'> Desliza hacia abajo</a>
            </div>
        </header>
    )
}

export default Hero