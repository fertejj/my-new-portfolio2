import React from 'react'
import './AboutCards.css'
import {FaAward, FaFlag} from "react-icons/fa"
import {BsBookFill} from "react-icons/bs"

const AboutCards = () => {
  return (
    <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia Laboral</h5>
              <p>6 meses trabajando como Full Stack Jr</p>
            </article>

            <article className='about__card'>
              <BsBookFill className='about__icon'/>
              <h5>Formacion Universitaria</h5>
              <p>Cursando 2do año Tecnico Analista Programador</p>
            </article>
          </div>
  )
}

export default AboutCards