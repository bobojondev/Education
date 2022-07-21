import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import Mentor1 from '../../img/mentor1.png'
import Mentor2 from '../../img/mentor2.png'
import Mentor3 from '../../img/mentor3.png'
import Star from '../../icons/star.png'
import Woman from '../../icons/woman.png'


const Mentor = () => {
  const mentorCard = [
    {
      id: 1,
      img:  Mentor1,
      name: 'Mohammod Ali',
      text: 'CEO, Developer',
      start: Star,
      woman: Woman,
      fllowrs: '8.2k',
      starU: '4.5',
      courses: '25+ Courses',
    },
    {
      id: 2,
      img:  Mentor2,
      name: 'Braniya Lara',
      text: 'Content Writter',
      start: Star,
      woman: Woman,
      fllowrs: '8.2k',
      starU: '4.5',
      courses: '25+ Courses',
    },
    {
      id: 3,
      img:  Mentor3,
      name: 'Mohammod Ali',
      text: 'Content Writter',
      start: Star,
      woman: Woman,
      fllowrs: '8.2k',
      starU: '4.5',
      courses: '25+ Courses',
    },
  ]
  return (
    <div className='mentors margin'>
      <div className="container">
        <div className="mentor">
          <div className="mentor__item maintitle">
            <h2 className="mentor__titles titles">Meet with Our Mentor</h2>
            <p className='mentor__texts texts'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa.
            </p>
          </div>
          <div className="mentor__cards">
            <Swiper
              slidesPerView={1}
              spaceBetween={1}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 1,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 3,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
              {
                mentorCard.map(mentors => (
                  <SwiperSlide key={mentors.id}>
                    <div className='mentor__card'>
                      <div className="mentor__header">
                        <img src={mentors.img} alt="mentorImg" />
                      </div>
                      <div className="mentor__main">
                        <div className="mentor__head">
                          <h3 className="mentor__name">{mentors.name}</h3>
                          <p className='mentor__profession'>{mentors.text}</p>
                        </div>
                        <div className="mentor__footer flexs">
                          <div className="mentor__left">
                            <div className="mentor__left-connect">
                              <img src={mentors.woman} alt="mentorsIcon" />
                              <p className='mentor__fllows'>{mentors.fllowrs}</p>
                            </div>
                            <div className="mentor__left-count">
                              <img src={mentors.start} alt="mentorsIcon" />
                              <p className='mentor__fllows'>{mentors.starU}</p>
                            </div>
                          </div>
                          <div className="mentor__right">
                            <p className='mentor__course'>{mentors.courses}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mentor