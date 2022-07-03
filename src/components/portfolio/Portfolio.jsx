import React, { useState } from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.jpg'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Portfolio v1.0',
    tech: ['•HTML\t','\t•CSS ', '•React'],
    role: 'Frontend, Backend',
    github: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'System for monitoring energy consumption of housing in a community',
    tech: ['•Java'],
    role: 'Backend',
    github: 'https://github.com/webst2r/SmartEnergySystem'
  },
  {
    id: 3,
    image: IMG3,
    title: 'System for recommending parcel delivery circuits',
    tech: ['•ProLog'],
    role: 'Backend',
    github: 'https://github.com/webst2r/IA-GreenDistribution'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Management System for Electronic Equipment Repair Centers ',
    tech: ['•Java ', ' •Visual Paradigm'],
    role: ['Backend'],
    github: 'https://github.com/webst2r/DSS-LojaDeReparacoes'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Flight Booking Platform',
    tech: ['•Java'],
    role: 'Backend',
    github: 'https://github.com/webst2r/SD-FlightBooking'
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, tech, github}) => {
            
            
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} /> 
                </div>
                <h3>{title}</h3>

                <div className="portfolio__item-tech btn-grad">
                  <p>{tech}</p>
                </div>
                

                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href="#" className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
                </div>

                
                {/* 
                <div className="portfolio__item-details">
                  <h3 className='details__title'></h3>
                  <p className='details__description'>{description}</p>
                  <ul className='details__info'>
                    <li>Technologies - <span>{tech}</span></li>
                    <li>Role - <span>{role}</span></li>
                    <li>View - <span><a href="#">{github}</a></span></li>
                  </ul>
                </div>
                */}
                
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio