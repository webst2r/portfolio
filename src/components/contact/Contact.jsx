import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>rodrigorodrigues56@hotmail.com</h5>
            <a href="mailto:rodrigorodrigues56@hotmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Rodrigo Rodrigues</h5>
            <a href="https://linkedin.com/in/rodrigopiresrodrigues" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsTwitter className='contact__option-icon'/>
            <h4>Twitter </h4>
            <h5>webster</h5>
            <a href="https://twitter.com/webst2r" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name= "name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact