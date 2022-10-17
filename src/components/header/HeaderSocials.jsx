import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials