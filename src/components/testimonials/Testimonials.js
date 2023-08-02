import React from 'react'
import './Testimonials.scss'
import cert1 from "../../assets/cert1.jpg"
import cert2 from "../../assets/cert2.jpg"
import cert3 from "../../assets/cert3.jpg"

// import Swiper core and required modules
import {Pagination,Navigation,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react'

const data = [
  {
    id: 1,
    image: cert2,
    title: 'ON THE SPOT AWARD',
    desc: 'Got this Individual Performance Award for 2 times from different clients for leading and completing the delivery well within the time with full answerability.'
  },
  {
    id: 2,
    image: cert1,
    title: 'ON THE SPOT AWARD - Team',
    desc: 'Got this Team Award from client for successfully completing the delivery, covering all the requirements made.'
  },
  {
    id: 3,
    image: cert3,
    title: 'Special Initiative Award',
    desc: 'Got this Individual Award in Annual Meet for taking up POC work which got us multiple projects and positively impacted our vertical annual result.'
  }
]

const Testimonials = () => {

  const swiperRef = useRef();
  return (
    <section id="testimonials">
      <h5>Appreciation and Awards</h5>
      <h2>Testimonials</h2>

      <div 
      onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
      >
      <Swiper
        spaceBetween={30}
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="container testimonial_container"
      >
        {data.map(elem=>{
        return (
          <SwiperSlide key={elem.id} className="testimonial">
            <div className="certificates">
              <img src={elem.image} alt={elem.title} className='testimonial-image'/>
              <div className="testimonial-details">
                <h3 className='certificate_name'>{elem.title}</h3>
                <small className='description'>{elem.desc}</small>
              </div>
            </div>
        </SwiperSlide>
        )
      })}
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
