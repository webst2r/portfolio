import React from 'react'
import './about.css'
import ME from '../../assets/logo.png'
import {MdSchool} from 'react-icons/md'
import {RiFocus2Fill} from 'react-icons/ri'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <MdSchool className='about__icon'/>
              <h5>Education</h5>
              <small>Bachelor's degree in Software Engineering</small>
            </article>

            <article className='about__card'>
              <RiFocus2Fill className='about__icon'/>
              <h5>Focus</h5>
              <small>Web & Backend development </small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>Front & Back End</small>
            </article>

          </div>

          <p>
            I'm a Software Engineer located in Portugal. Dedicated to delivering robust and scalable solutions and actively contribute to the development of innovative software applications. Interested in the entire backend spectrum and working on ambitious projects with positive people.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About