import React from 'react'
import CoursesImg1 from '../../svg/CoursesImg1'
import CoursesImg2 from '../../svg/CoursesImg2'
import CoursesImg3 from '../../svg/CoursesImg3'
import CoursesImg from '../../img/coursesImg.png'
import Courses1 from '../../img/courses1.png'
import Courses2 from '../../img/courses2.png'
import Courses3 from '../../img/courses3.png'
import Courses4 from '../../img/courses4.png'
import Courses5 from '../../img/courses5.png'
import Courses6 from '../../img/courses6.png'
const Courses = () => {
  const courseCard = [
    {
      id: 1,
      img: Courses1,
      img1: CoursesImg,
      icon1: <CoursesImg1 />,
      icon2: <CoursesImg2 />,
      icon3: <CoursesImg3 />,
      woman: '5.8k',
      eye: '69K',
      star: '4.5'
    },
    {
      id: 2,
      img: Courses2,
      img1: CoursesImg,
      icon1: <CoursesImg1 />,
      icon2: <CoursesImg2 />,
      icon3: <CoursesImg3 />,
      woman: '5.8k',
      eye: '69K',
      star: '4.5'
    },
    {
      id: 3,
      img: Courses3,
      img1: CoursesImg,
      icon1: <CoursesImg1 />,
      icon2: <CoursesImg2 />,
      icon3: <CoursesImg3 />,
      woman: '5.8k',
      eye: '69K',
      star: '4.5'
    },
    {
      id: 4,
      img: Courses4,
      img1: CoursesImg,
      icon1: <CoursesImg1 />,
      icon2: <CoursesImg2 />,
      icon3: <CoursesImg3 />,
      woman: '5.8k',
      eye: '69K',
      star: '4.5'
    },
    {
      id: 5,
      img: Courses5,
      img1: CoursesImg,
      icon1: <CoursesImg1 />,
      icon2: <CoursesImg2 />,
      icon3: <CoursesImg3 />,
      woman: '5.8k',
      eye: '69K',
      star: '4.5'
    },
    {
      id: 6,
      img: Courses6,
      img1: CoursesImg,
      icon1: <CoursesImg1 />,
      icon2: <CoursesImg2 />,
      icon3: <CoursesImg3 />,
      woman: '5.8k',
      eye: '69K',
      star: '4.5'
    },
  ]
  return (
    <div className='courses margin'>
      <div className="container">
        <div className="course">
          <div className="course__item maintitle">
            <h2 className="course__title titles">Our All The Online Courses</h2>
            <p className="course__texts texts">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="course__cards">
            {
              courseCard.map(cardsElm => (
                <div key={cardsElm.id} className="course__card">
                  <div className="course__header">
                    <div className="course__img">
                      <img src={cardsElm.img} alt="Courses" />
                    </div>
                    <div className="course__connects flexs">
                      <div className="course__woman">
                        <div className="course__left">
                          {cardsElm.icon1}
                        </div>
                        <p className="course__right">{cardsElm.woman}</p>
                      </div>
                      <div className="course__woman">
                        <div className="course__left">
                          {cardsElm.icon2}
                        </div>
                        <p className="course__right">{cardsElm.eye}</p>
                      </div>
                      <div className="course__woman">
                        <div className="course__left">
                          {cardsElm.icon3}
                        </div>
                        <p className="course__right">{cardsElm.star}</p>
                      </div>
                      <div className="course__woman">
                        <div className="course__profil">
                          <img src={cardsElm.img1} alt="CoursesImg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='course__main'>
                    <div className="course__devalop flexs">
                      <h3 className='course__devalop-dev'>Development</h3>
                      <h3 className='course__devalop-price'>$150</h3>
                    </div>
                    <p className='course__text'>
                       Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.
                    </p>
                  </div>
                </div>                
              ))
            }
          </div>
          <div className="course__button">
             <button className="course__btn button">View All Course</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses