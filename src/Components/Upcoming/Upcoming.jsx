import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


import UpcomingImg1 from '../../img/upcoming1.png'
import UpcomingImg2 from '../../img/upcoming2.png'
import UpcomingImg3 from '../../img/upcoming3.png'
import Soat from '../../icons/soat.png'
import Maps from '../../icons/map.png'

const Upcoming = () => {
  const upcomingCard = [
    {
      id: 1,
      img: UpcomingImg1,
      date: '10',
      dateText: 'APR',
      title: 'TED Talks at UCF College of Education',
      hourText: '4.00 pm - 8.00 pm',
      hourIcon: Soat,
      mapIcon: Maps,
      mapText: 'Dhaka Bangladesh'
    },
    {
      id: 2,
      img: UpcomingImg2,
      date: '10',
      dateText: 'APR',
      title: 'TED Talks at UCF College of Education',
      hourText: '4.00 pm - 8.00 pm',
      hourIcon: Soat,
      mapIcon: Maps,
      mapText: 'Dhaka Bangladesh'
    },
    {
      id: 3,
      img: UpcomingImg3,
      date: '10',
      dateText: 'APR',
      title: 'TED Talks at UCF College of Education',
      hourText: '4.00 pm - 8.00 pm',
      hourIcon: Soat,
      mapIcon: Maps,
      mapText: 'Dhaka Bangladesh'
    },
  ]
  return (
    <div className='upcomings margin'>
      <div className="container">
        <div className="upcoming">
          <div className="upcoming__item maintitle">
            <h2 className="upcoming__titles titles">Upcoming Event</h2>
            <p className='upcoming__texts texts'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum.</p>
          </div>
          <div className="upcoming__cards">
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
              upcomingCard.map(upcom => (
                <SwiperSlide key={upcom.id}>
                  <div className='upcoming__card'>
                    <div className="upcoming__header">
                      <img src={upcom.img} alt="UpcomingImgs" />
                      <div className="upcoming__dates">
                        <h3 className="upcoming__date">{upcom.date}</h3>
                        <p className='upcoming__dateText'>{upcom.dateText}</p>
                      </div>
                    </div>
                    <div className="upcoming__main">
                      <h3 className="upcoming__title">TED Talks at UCF College of Education</h3>
                      <div className="upcoming__footer flexs">
                        <div className="upcoming__hours">
                          <img src={upcom.hourIcon} alt="HourIcon" />
                          <p className='upcoming__hourText'>{upcom.hourText}</p>
                        </div>
                        <div className="upcoming__maps">
                          <img src={upcom.mapIcon} alt="mapIcons" />
                          <p className='upcoming__mapText'>{upcom.mapText}</p>
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

export default Upcoming