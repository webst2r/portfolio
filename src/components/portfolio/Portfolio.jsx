import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Portfolio v1.0 (React JS)',
    github: '',
    demo:'',
    details:''
  },
  {
    id: 2,
    image: IMG2,
    title: 'System for monitoring energy consumption of housing in a community',
    github: 'https://github.com/webst2r/SmartEnergySystem',
    demo:'',
    details:''
  },
  {
    id: 3,
    image: IMG3,
    title: 'System for recommending parcel delivery circuits',
    github: 'https://github.com/webst2r/IA-GreenDistribution',
    demo:'',
    details:''
  },
  {
    id: 4,
    image: IMG4,
    title: 'Management System for Electronic Equipment Repair Centers ',
    github: 'https://github.com/webst2r/DSS-LojaDeReparacoes',
    demo:'',
    details:''
  },
  {
    id: 5,
    image: IMG5,
    title: 'Flight Booking Platform',
    github: 'https://github.com/webst2r/SD-FlightBooking',
    demo:'',
    details:''
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} /> 
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>     
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio