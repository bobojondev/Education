import React from 'react'



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";





import StudentsImg1 from '../../img/students1.png'
import StudentsImg2 from '../../img/students2.png'
import StudentsImg3 from '../../img/students3.png'

const Students = () => {

  const studentCard = [
    {
      id: 1,
      img: StudentsImg1,
      text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam. Proin iaculis arcu iaculis egestas.',
      name: 'Jony Ahmed',
      typeWork: 'UI/UX Student'
    },
    {
      id: 2,
      img: StudentsImg2,
      text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam. Proin iaculis arcu iaculis egestas.',
      name: 'Jony Ahmed',
      typeWork: 'UI/UX Student'
    },
    {
      id: 3,
      img: StudentsImg3,
      text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam. Proin iaculis arcu iaculis egestas.',
      name: 'Jony Ahmed',
      typeWork: 'UI/UX Student'
    },
    {
      id: 4,
      img: StudentsImg1,
      text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam. Proin iaculis arcu iaculis egestas.',
      name: 'Jony Ahmed',
      typeWork: 'UI/UX Student'
    }, 
  ]

  return (
    <div className='students margin'>
      <div className="container">
        <div className="student">
          <div className="student__items maintitle">
            <h2 className="student__titles titles">What Our Students Say</h2>
            <p className="student__texts texts">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="student__cards">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                mousewheel={true}
                keyboard={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 1,
                    pagination: false,
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
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
              {
                studentCard.map(studentCa => (
                  <SwiperSlide key={studentCa.id}>
                    <div className='student__card'>
                      <div className="student__header">
                        <p className="student__text">
                          {studentCa.text}
                        </p>
                      </div>
                      <div className="student__main">
                        <div className="student__img">
                          <img src={studentCa.img} alt="StudentImg" />
                        </div>
                        <div className="student__item">
                          <h3 className='student__name'>{studentCa.name}</h3>
                          <p className="student__typework">{studentCa.typeWork}</p>
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

export default Students