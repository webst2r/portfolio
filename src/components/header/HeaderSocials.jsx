import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rodrigopiresrodrigues/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/webst2r" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderSocials