import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

function HeaderSocials() {
  return (
    <div className="header_social">
        <a href="https://www.linkedin.com/in/akash-tyagi-b9b031159/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/akashtyagi4444" target='_blank'><FaGithub /></a>
        <a href="https://leetcode.com/Akash2104/" target='_blank'><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials