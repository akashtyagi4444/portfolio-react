import React from 'react';
import './Portfolio.scss';
import Portfolio1 from "../../assets/portfolio1.jpg"
import Portfolio2 from "../../assets/portfolio2.jpg"
import Portfolio3 from "../../assets/portfolio3.jpg"
import Portfolio4 from "../../assets/portfolio4.jpg"
import Portfolio5 from "../../assets/portfolio5.png"
import Portfolio6 from "../../assets/portfolio6.jpg"


const data = [
  {
    id: 1,
    image: Portfolio1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: ""
  },
  {
    id: 2,
    image: Portfolio2,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: ""
  },
  {
    id: 3,
    image: Portfolio3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: ""
  },
  {
    id: 4,
    image: Portfolio4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com",
    demo: ""
  },
  {
    id: 5,
    image: Portfolio5,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: ""
  },
  {
    id: 6,
    image: Portfolio6,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: ""
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(elem=>{
            return (
              <article key={elem.id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={elem.image} alt={elem.title} />
                </div>
                <h4>{elem.title}</h4>
                <div className="portfolio_item-cta">
                  <a href= {elem.github} className='btn' target = '_blank'>Github</a>
                  <a href= {elem.demo} className='btn btn-primary' target = '_blank'>Live Demo</a>
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