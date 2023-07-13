import React, { useState } from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiProlog} from 'react-icons/di'
import {SiCsharp, SiSpring} from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import {FaReact, FaJava, FaDatabase, FaPython} from 'react-icons/fa'
import {BsPatchCheckFill} from 'react-icons/bs'





const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Portfolio v1.0',
    tech: [{name: 'HTML', symbol: <AiFillHtml5 className='portfolio__tech-icon'/>}, {name: 'CSS ', symbol: <DiCss3 className='portfolio__tech-icon'/>},{name: 'React', symbol: <FaReact className='portfolio__tech-icon'/>}],
    role: 'Frontend, Backend',
    github: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Feirum: Online Fairs E-commerce Application',
    tech: [{name: '.NET C#', symbol:<SiCsharp className='portfolio__tech-icon'/>}, {name: 'SQL Server', symbol:<FaDatabase className='portfolio__tech-icon'/>}],
    role: 'Backend',
    github: 'https://github.com/webst2r/feirum'
  },
  {
    id: 3,
    image: IMG3,
    title: 'RasBet: Sports Betting Application',
    tech: [{name: 'Java', symbol:<FaJava className='portfolio__tech-icon'/>},
     {name: 'Spring Boot', symbol:<SiSpring className='portfolio__tech-icon'/>},
     {name: 'MySQL', symbol:<GrMysql className='portfolio__tech-icon'/>} ],
    role: 'Backend',
    github: 'https://github.com/webst2r/rasbet'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Web Scraping: Predicting Cryptocurrency Returns - Unleashing insights from Twitter Sentiment Analysis',
    tech: [{name: 'Python', symbol:<FaPython className='portfolio__tech-icon'/>}],
    role: 'Backend',
    github: 'https://github.com/webst2r/MD-Project'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Smart Energy System: Monitor Energy Consumption in a Housing Community',
    tech: [{name: 'Java', symbol:<FaJava className='portfolio__tech-icon'/>}],
    role: 'Backend',
    github: 'https://github.com/webst2r/POO-SmartEnergySystem'
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

                <div className='portfolio__tech_wrapper'>
                  {tech.map((tech_item) => {
                    return(
                      <div className='portfolio__item-tech'>
                        {tech_item['symbol']}
                        <div>
                          <h4>{tech_item['name']}</h4>
                        </div>
                    </div>
                    )
                  })}
                </div>

                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  {/* <a href="#" className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a> */}
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