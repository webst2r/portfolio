import React from 'react'
import './footer.css'

import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>RR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/rodrigopiresrodrigues" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
        <a href="https://github.com/webst2r" target="_blank" rel="noreferrer"><AiFillGithub /></a>
        <a href="https://twitter.com/webst2r" target="_blank" rel="noreferrer"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rodrigo Rodrigues. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer