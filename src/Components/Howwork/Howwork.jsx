import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";


import howworkImg1 from '../../img/howworkImg1.png'
import howworkImg2 from '../../img/howworkImg2.png'
import howworkImg3 from '../../img/howworkImg3.png'
import howworkImg4 from '../../img/howworkImg4.png'
const Howwork = () => {
  const cardElm = [
    {
      id: 1,
      img: howworkImg1,
      title: 'Learn More Online',
      text: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.',
    },
    {
      id: 2,
      img: howworkImg2,
      title: 'Writing Notes',
      text: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.',
    },
    {
      id: 3,
      img: howworkImg3,
      title: 'Interactive Sessions',
      text: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.',
    },
    {
      id: 4,
      img: howworkImg4,
      title: 'Life Time Support',
      text: 'Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.',
    },
  ]
  return (
    <div className='howworks margin'>
      <div className="container">
        <div className="howwork">
          <div className="howwork__item maintitle">
            <h2 className='howwork__title titles'>How It Work</h2>
            <p className='howwork__text texts'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit. </p>
          </div>
          <div className="howwork__cards">
            <>
              <Swiper
                slidesPerView={1}
                spaceBetween={1}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 1,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 2,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 3,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                {
                  cardElm.map(item => (
                    <SwiperSlide key={item.id}>
                      <div className='howwork__card'>
                        <div className="howwork__logo">
                          <img src={item.img} alt="howworksImgs" />
                        </div>
                        <h3 className='howwork__cardtitle'>{item.title}</h3>
                        <p className='howwork__cardtext'>{item.text}</p>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Howwork