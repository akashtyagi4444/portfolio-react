import React from 'react'
import './About.scss';
import ME from "../../assets/me-about.png"
import {FaAward} from "react-icons/fa"
import {GoOrganization} from "react-icons/go"
import {FiUsers} from "react-icons/fi"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className='about_card'>
              <GoOrganization className='about_icon'/>
              <h5>Ernst & Young</h5>
              <small>Senior Technology Consultant</small>
              <br />
              <small>Working with Goldman Sachs - Onsite</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </article>
          </div>
          <p>Highly skilled and innovative full stack developer with expertise in front-end and back-end
             technologies. Proven track record of successful projects, strong problem-solving abilities.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
