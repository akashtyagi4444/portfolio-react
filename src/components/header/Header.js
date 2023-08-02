import React from 'react';
import './Header.scss';
import CTA from './CTA'
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me.png'

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Akash Tyagi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header