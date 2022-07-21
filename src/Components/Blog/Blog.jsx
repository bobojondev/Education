import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


import BlogImg1 from '../../img/blog1.png'
import BlogImg2 from '../../img/blog2.png'
import BlogImg3 from '../../img/blog3.png'
const Blog = () => {

  const blogCard = [
    {
      id: 1,
      img: BlogImg1,
      title: 'Product Marketing Creative Camping Brand Image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet, vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida massa.',
      btn: 'Read More...'
    },
    {
      id: 2,
      img: BlogImg2,
      title: 'Product Marketing Creative Camping Brand Image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet, vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida massa.',
      btn: 'Read More...'
    },
    {
      id: 3,
      img: BlogImg3,
      title: 'Product Marketing Creative Camping Brand Image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet, vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida massa.',
      btn: 'Read More...'
    }
  ]

  return (
    <div className='blogs margin'>
      <div className="container">
        <div className="blog">
          <div className="blog__item maintitle">
            <h2 className='blog__titles titles'>Our Latest Blog</h2>
            <p className='blog__texts texts'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum.</p>
          </div>
          <div className="blog__cards">
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
                  blogCard.map(blogsCa => (
                    <SwiperSlide key={blogsCa.id}>
                      <div className="blog__card">
                        <div className="blog__header">
                          <img src={blogsCa.img} alt="blogImg" />
                        </div>
                        <div className="blog__main">
                          <h3 className='blog__title'>{blogsCa.title}</h3>
                          <p className='blog__texts'>{blogsCa.text}</p>
                          <a href="#" className='blog__btn'>{blogsCa.btn}</a>
                        </div>
                      </div>
                   </SwiperSlide>
                  ))
                }
              </Swiper>
          </div>
          <div className="blog__view">
            <button className='blog__button button'>View All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog